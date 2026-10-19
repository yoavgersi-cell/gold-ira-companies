// Live precious-metal prices for the ticker above the header.
//
// Primary source: Yahoo Finance chart API for the front-month COMEX/NYMEX
// futures (gold, silver, platinum, palladium) - gives the last price and the
// previous close, so we can show the day's change. It is unofficial and
// keyless, so it can change or rate-limit without notice.
// Fallback: gold-api.com (free, keyless) - spot price only, no change.
// Every request is cached for 5 minutes and wrapped so a failure never breaks
// a page: metals that can't be priced are dropped, and the ticker hides itself
// when none can.

export interface MetalPrice {
  name: string;
  price: number;
  /** Change vs the previous close, in USD. Undefined when the source lacks it. */
  change?: number;
}

const METALS = [
  { name: "Gold", future: "GC=F", spot: "XAU" },
  { name: "Silver", future: "SI=F", spot: "XAG" },
  { name: "Platinum", future: "PL=F", spot: "XPT" },
  { name: "Palladium", future: "PA=F", spot: "XPD" },
];

const REVALIDATE_SECONDS = 300;

async function getJson(url: string): Promise<unknown> {
  const res = await fetch(url, {
    next: { revalidate: REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(4000),
    headers: { "User-Agent": "Mozilla/5.0 (compatible; goldiraplanet.com)" },
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}

interface YahooChart {
  chart?: { result?: { meta?: { regularMarketPrice?: number; chartPreviousClose?: number; previousClose?: number } }[] };
}

async function fromYahoo(name: string, symbol: string): Promise<MetalPrice> {
  const data = (await getJson(
    `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=1d&interval=1d`,
  )) as YahooChart;
  const meta = data.chart?.result?.[0]?.meta;
  const price = meta?.regularMarketPrice;
  if (typeof price !== "number" || !(price > 0)) throw new Error(`no price for ${symbol}`);
  const prev = meta?.chartPreviousClose ?? meta?.previousClose;
  return { name, price, change: typeof prev === "number" && prev > 0 ? price - prev : undefined };
}

async function fromGoldApi(name: string, symbol: string): Promise<MetalPrice> {
  const data = (await getJson(`https://api.gold-api.com/price/${symbol}`)) as { price?: number };
  if (typeof data.price !== "number" || !(data.price > 0)) throw new Error(`no price for ${symbol}`);
  return { name, price: data.price };
}

export async function getMetalPrices(): Promise<MetalPrice[]> {
  const results = await Promise.all(
    METALS.map((m) =>
      fromYahoo(m.name, m.future)
        .catch(() => fromGoldApi(m.name, m.spot))
        .catch(() => null),
    ),
  );
  return results.filter((r): r is MetalPrice => r !== null);
}

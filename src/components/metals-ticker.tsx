import { getMetalPrices, type MetalPrice } from "@/lib/metal-prices";

const fmt = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Day's change as a percentage of the previous close (price - change).
const pct = (m: MetalPrice) => (m.change === undefined || m.price - m.change <= 0 ? undefined : (m.change / (m.price - m.change)) * 100);

// Black price strip above the header: GOLD 4,180.95 +0.34% ▲ ... scrolling
// right-to-left on a loop (paused on hover, static for reduced motion).
// Server rendered from a 5-minute cached feed; renders nothing when no price
// loads.
export async function MetalsTicker() {
  const prices = await getMetalPrices();
  if (prices.length === 0) return null;

  // The list is repeated so the track is wide enough to fill any screen; the
  // animation moves it by exactly one half (the first `copies` sets), which
  // makes the loop seamless.
  const copies = 4;
  const items = Array.from({ length: copies * 2 }, () => prices).flat();

  return (
    <div className="metals-ticker overflow-hidden bg-black text-white" aria-label="Precious metal prices, USD per ounce">
      <ul className="sr-only">
        {prices.map((m) => {
          const p = pct(m);
          return (
            <li key={m.name}>
              {m.name} {fmt(m.price)} USD{p !== undefined && `, ${p >= 0 ? "up" : "down"} ${fmt(Math.abs(p))}%`}
            </li>
          );
        })}
      </ul>
      <div className="metals-ticker-track flex w-max items-center py-1.5 text-[12px]" aria-hidden="true">
        {items.map((m, i) => (
          <Price key={i} m={m} />
        ))}
      </div>
    </div>
  );
}

function Price({ m }: { m: MetalPrice }) {
  const p = pct(m);
  const up = (p ?? 0) >= 0;
  return (
    <span className="flex shrink-0 items-baseline gap-1.5 px-5">
      <span className="font-bold uppercase tracking-wide">{m.name}</span>
      <span>{fmt(m.price)}</span>
      {p !== undefined && (
        <span className={up ? "text-[#8EE07A]" : "text-[#FF7A7A]"}>
          {up ? "+" : "-"}
          {fmt(Math.abs(p))}% {up ? "▲" : "▼"}
        </span>
      )}
    </span>
  );
}

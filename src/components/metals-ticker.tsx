import { getMetalPrices } from "@/lib/metal-prices";

const fmt = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Black price strip above the header: GOLD 4,180.95 +14.34 ▲ ... Server
// rendered from a 5-minute cached feed; renders nothing when no price loads.
export async function MetalsTicker() {
  const prices = await getMetalPrices();
  if (prices.length === 0) return null;

  return (
    <div className="bg-black text-white" aria-label="Precious metal prices, USD per ounce">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-1 whitespace-nowrap px-4 py-2 text-[14px] sm:flex sm:items-center sm:justify-center sm:gap-x-12 sm:py-2.5 sm:text-[17px]">
        {prices.map((m) => {
          const up = (m.change ?? 0) >= 0;
          return (
            <li key={m.name} className="flex shrink-0 items-baseline gap-2">
              <span className="font-bold uppercase">{m.name}</span>
              <span>{fmt(m.price)}</span>
              {m.change !== undefined && (
                <span className={up ? "text-[#8EE07A]" : "text-[#FF7A7A]"}>
                  {up ? "+" : "-"}
                  {fmt(Math.abs(m.change))} <span aria-hidden="true">{up ? "▲" : "▼"}</span>
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

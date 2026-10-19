import Link from "next/link";
import type { Provider } from "@/lib/config";
import { FACTS, FEATURE_LABELS } from "@/lib/seeds/gold-ira/shared";
import { PROVIDER_DATA_CHECKED } from "@/lib/config";

// One table with every ranked company's comparable facts (minimum, setup and
// yearly fees, storage, buyback, promotion, founding year). Plain server-rendered HTML -
// the single most quotable block on the site for search snippets and AI
// answer engines. Values come from the same FACTS map the comparisons use.
export function ProviderFactsTable({ providers }: { providers: Provider[] }) {
  const rows = providers.filter((p) => FACTS[p.id]);
  if (rows.length === 0) return null;
  return (
    <section id="compare" className="mx-auto max-w-[1200px] scroll-mt-4 px-4 pb-4" aria-labelledby="facts-table-heading">
      <h2 id="facts-table-heading" className="mb-1.5 text-[22px] font-bold text-[#191919]">
        Gold IRA Companies Compared at a Glance
      </h2>
      <p className="mb-4 text-[14px] text-gray-500">
        Approximate figures from third-party reviews and company materials, checked {PROVIDER_DATA_CHECKED}. Fees vary by custodian and
        account size - always confirm in writing with the company.
      </p>
      <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full min-w-[980px] border-collapse text-left text-[15px]">
          <caption className="sr-only">Gold IRA companies compared by minimum investment, setup fee, yearly fees, storage, buyback terms, promotion and founding year</caption>
          <thead>
            <tr className="border-b-2 border-gray-200 bg-[#F7F1E3]">
              <th scope="col" className="px-4 py-3 font-bold text-[#191919]">Company</th>
              {FEATURE_LABELS.map(([key, label]) => (
                <th key={key} scope="col" className="px-4 py-3 font-bold text-[#191919]">{label}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((p, i) => (
              <tr key={p.id} className={i % 2 === 1 ? "bg-gray-50/50" : ""}>
                <th scope="row" className="px-4 py-3 align-top font-semibold">
                  <Link href={`/reviews/${p.id}`} className="text-[#1E3A5F] hover:underline">
                    {i + 1}. {p.name}
                  </Link>
                </th>
                {FEATURE_LABELS.map(([key]) => (
                  <td key={key} className="px-4 py-3 align-top text-gray-700">{FACTS[p.id][key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

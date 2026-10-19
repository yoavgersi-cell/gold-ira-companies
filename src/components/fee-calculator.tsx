"use client";

import { useState } from "react";

interface CalcCompany {
  id: string;
  name: string;
  setupFee?: number;
  annualFee?: number;
}

// Fallbacks when a company doesn't publish fees: the typical flat range we
// see across the industry (~$175-$300/yr), so the estimate is never $0.
const DEFAULT_SETUP = 50;
const DEFAULT_ANNUAL = 250;

const usd = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;

export function FeeCalculator({ companies }: { companies: CalcCompany[] }) {
  const [amount, setAmount] = useState(50000);
  const [years, setYears] = useState(10);
  const [markup, setMarkup] = useState(7);
  const [companyId, setCompanyId] = useState(companies[0]?.id ?? "");

  const company = companies.find((c) => c.id === companyId);
  const setup = company?.setupFee ?? DEFAULT_SETUP;
  const annual = company?.annualFee ?? DEFAULT_ANNUAL;
  const usesDefaults = company?.setupFee === undefined || company?.annualFee === undefined;

  const markupCost = amount * (markup / 100);
  const feeTotal = setup + annual * years;
  const total = markupCost + feeTotal;
  // Metal actually bought = amount minus markup; it must grow back to the
  // amount invested plus all fees paid to break even.
  const metalValue = amount - markupCost;
  const breakEven = metalValue > 0 ? ((amount + feeTotal) / metalValue - 1) * 100 : 0;

  const field = "mt-1.5 w-full rounded-md border-2 border-gray-300 bg-white px-3 py-2.5 text-[18px] text-[#191919] focus:border-[#1E4E79] focus:outline-none";
  const label = "block text-[16px] font-semibold text-[#191919]";

  return (
    <div className="mt-8 rounded-md border border-gray-300 bg-white p-5 sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>
          Amount to invest
          <input
            type="number"
            inputMode="numeric"
            min={0}
            step={1000}
            value={amount}
            onChange={(e) => setAmount(Math.max(0, Number(e.target.value) || 0))}
            className={field}
          />
        </label>
        <label className={label}>
          Company
          <select value={companyId} onChange={(e) => setCompanyId(e.target.value)} className={field}>
            {companies.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <label className={label}>
          Years held: {years}
          <input type="range" min={1} max={25} value={years} onChange={(e) => setYears(Number(e.target.value))} className="mt-3 w-full accent-[#1E4E79]" />
        </label>
        <label className={label}>
          Dealer markup: {markup}%
          <input type="range" min={0} max={40} value={markup} onChange={(e) => setMarkup(Number(e.target.value))} className="mt-3 w-full accent-[#1E4E79]" />
          <span className="mt-1 block text-[14px] font-normal text-gray-500">Common bullion ~5-10%; premium or proof coins often much more.</span>
        </label>
      </div>

      <dl className="mt-7 grid gap-3 sm:grid-cols-2">
        <Stat label="Setup + yearly fees" value={usd(feeTotal)} note={`${usd(setup)} setup + ${usd(annual)}/yr x ${years} yrs`} />
        <Stat label="Markup paid on day one" value={usd(markupCost)} note={`${markup}% of ${usd(amount)}`} />
        <Stat label={`Estimated total cost over ${years} years`} value={usd(total)} strong />
        <Stat label="Gold must rise this much to break even" value={`${breakEven.toFixed(1)}%`} strong />
      </dl>

      {usesDefaults && (
        <p className="mt-4 text-[14px] text-gray-500">
          {company?.name ?? "This company"} doesn&apos;t publish all of its fees, so we used typical industry figures ({usd(DEFAULT_SETUP)} setup,{" "}
          {usd(DEFAULT_ANNUAL)}/yr). Ask the company for a written quote.
        </p>
      )}
    </div>
  );
}

function Stat({ label, value, note, strong }: { label: string; value: string; note?: string; strong?: boolean }) {
  return (
    <div className={strong ? "rounded-md bg-[#EEF4FA] p-4" : "rounded-md bg-gray-50 p-4"}>
      <dt className="text-[15px] font-medium text-gray-700">{label}</dt>
      <dd className={strong ? "mt-1 text-[30px] font-extrabold text-[#1E4E79]" : "mt-1 text-[26px] font-bold text-[#191919]"}>{value}</dd>
      {note && <dd className="text-[13px] text-gray-500">{note}</dd>}
    </div>
  );
}

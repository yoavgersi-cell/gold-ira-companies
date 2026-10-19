"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function DisclosureBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-[#FAF6EC] border-b-[1.5px] border-[#EDE3C8] px-4 py-1 sm:py-1.5 text-center text-[10px] sm:text-[11.5px] leading-tight sm:leading-normal text-gray-600">
        Some companies featured on this site pay us when you request a kit or open an account through our links. This can affect which companies appear and where. Not financial advice.{" "}
        <button
          onClick={() => setIsOpen(true)}
          className="font-bold text-[#191919] underline underline-offset-2 hover:text-[#1E3A5F]"
        >
          Advertising Disclosure
        </button>
      </div>

      {/* Popup overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setIsOpen(false)}>
          <div
            className="relative mx-4 max-h-[80vh] w-full max-w-[600px] overflow-y-auto rounded-lg bg-white p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-600"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>

            <h2 className="mb-5 text-[20px] font-bold text-[#191919]">Advertising Disclosure</h2>

            <div className="space-y-4 text-[14px] leading-[1.7] text-gray-600">
              <p>
                Gold IRA Planet is an independent comparison website that helps consumers compare gold IRA companies. We research and compare minimums, fees, storage, buyback terms and track records. We are not a broker, dealer or custodian, and nothing on this site is financial, tax or legal advice.
              </p>
              <p>
                The information presented on this website is provided for general informational purposes only. While we strive to keep content accurate and up to date, we cannot guarantee the completeness, accuracy, or availability of every company, fee or offer in the market. Fees and minimums are approximate - confirm them in writing before you invest.
              </p>
              <p>
                Some of the companies featured on this website pay us when visitors click through and request a kit, schedule a call or open an account. This compensation may influence which companies are displayed and how they are ranked or featured. It does not change the facts, fees or warnings we publish, which are the same for every company.
              </p>
              <p>
                Company names, trademarks, logos, and brand assets remain the property of their respective owners. Their appearance on this website does not imply endorsement, partnership, or sponsorship unless explicitly stated.
              </p>
              <p>
                Our ranking order is set by our editors, based on editorial research, publicly available information, fees and minimums, buyback and storage terms, ratings, regulator records and other criteria. Not every gold IRA company is included on our website.
              </p>
              <p>
                By using this website, you agree to our Terms of Use and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

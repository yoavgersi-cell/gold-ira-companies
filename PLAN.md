# Gold IRA Comparison Site: Plan

Status: draft for review (Oct 19, 2026). No code has been written yet.

Every company figure here comes from third-party pages that often contradict each other. Check each one on the company's own site, BBB.org and Trustpilot before it goes live.

---

## 1. Positioning

Search results for "best gold IRA companies" are crowded and look much the same everywhere:
- **Big finance brands:** CNBC Select, Yahoo Finance, Bankrate, Fortune, Benzinga, Finder, ConsumerAffairs.
- **Paid "sponsored" pages on news sites:** jpost, timesofisrael, sltrib and similar.
- **Expired domains and monthly press releases.**

Almost all of them rank Augusta #1, quote fees that conflict and go stale, and say nothing about the coin markup. The markup is the cost that actually hurts buyers: 5–10% on bullion, and 30–130% on "premium" or proof coins in the enforcement cases.

**Our angle: the "true cost" comparison.**
- Every company gets the same fact sheet, dated.
- A plain-English fee and markup explainer sits next to every ranking.
- We openly cover the scams and enforcement history competitors skip: Red Rock Secured, Safeguard Metals, Lear Capital, Goldline.

This builds the trust the audience is looking for. It also builds the E-E-A-T (experience, expertise, authority, trust) that Google requires for retirement-money content. The parasite and press-release pages carry Google-penalty risk, so they can lose their rankings without warning.

## 2. Audience

**Who they are:**
- **Core:** ages 50–75, pre-retirees and retirees with 401(k)/IRA/TSP balances. Typical ticket is $25k–$250k+.
- **Profile:** conservative, worried about inflation and a crash, distrustful of banks, and often using a phone with large text.
- **Secondary:** ages 35–49 buying physical metals. This rests on one commissioned survey and is weaker evidence.

**What they need to know, in order:**
1. Does a gold IRA make sense for me, and how much should I move? (General education only; no personal advice.)
2. Which companies will accept my amount? **Minimums are the first filter:** $0, $10k, $25k or $50k.
3. What will it really cost? Setup fee, annual admin and storage, and the spread or markup on the coins, plus the buyback spread.
4. How does a rollover work? 401(k) vs. TSP vs. IRA, and direct transfer vs. 60-day indirect rollover (20% withholding risk).
5. Rules: IRS-eligible metals, why home storage isn't allowed, RMDs, Roth vs. traditional.
6. Is this company safe? BBB, Trustpilot, years in business, lawsuits, and whether it will buy the metal back.

**Trust signals they look for:**
- Named reviewer with credentials.
- "Last updated" dates.
- Sources and links to regulators.
- No pressure language.
- An easy phone number.

## 3. Providers

**Ranked list (7 to start, like the hosting site).** The final order depends on which affiliate programs approve us.

| # | Company | Min. IRA | Fees (approx., verify) | Best for | Affiliate |
|---|---|---|---|---|---|
| 1 | Augusta Precious Metals | $50,000 | ~$275 setup + ~$225–275/yr | Larger accounts, education | Selective. Needs proven traffic and $50k+ leads. |
| 2 | Goldco | $25,000 | ~$50–275 setup + ~$225/yr | Silver promos, mid-size accounts | Everflow, 90-day cookie, ~$165–200 per lead |
| 3 | Noble Gold | $20,000 | No setup fee, ~$80 admin + $150 storage | Fees published online, Texas storage | Yes (rate unpublished) |
| 4 | Birch Gold Group | $10,000 | ~$50 setup, ~$235/yr; year 1 waived above $50k | Long track record (2003) | Per lead plus lifetime commission |
| 5 | American Hartford Gold | $10,000 | ~$230 setup + $225–275/yr | Lower entry | **Program looks inactive. Check.** |
| 6 | Advantage Gold | $5k–10k | n/a | First-time buyers, education | Check |
| 7 | Patriot Gold Group / Priority Gold / Preserve Gold | varies | "No fees" promos | Fee waivers | Check |

**Also covered:**
- **Low-cost / do-it-yourself pick:** Silver Gold Bull. No minimum, published fees ($50 setup, $125/yr, $100–150 storage). It earns trust as the honest "if you just want cheap" option.
- **Mentioned but not ranked:** Lear Capital. Its history includes the NY Attorney General markup suit, the LA City Attorney settlement, and a Chapter 11 plan paying $5.5M back to investors. This is useful "watch out" content.

**Fact sheet** (same fields on every company; feeds all tables, reviews and "vs" pages):
- **Account:** minimum IRA, minimum cash purchase, setup fee, annual admin fee, storage fee (segregated vs. non-segregated).
- **Providers it works with:** custodians, depositories.
- **Pricing practices:** buyback program, price list published online (Y/N), current promo.
- **Track record:** year founded, BBB rating, BCA rating, Trustpilot score with review count, enforcement history (Y/N with link).
- **Upkeep:** "verified on" date.

## 4. Site structure (kept simple, same as today)

```
/                        Homepage: ranked comparison, amount filter, FAQs
/reviews                 All company reviews
/reviews/[company]       Full review: fact sheet, fees, pros/cons, buyback, complaints, FAQ
/[a]-vs-[b]              Head-to-head pages (Augusta vs Goldco, Goldco vs Noble, ...)
/articles                Guides hub
/articles/[slug]         Guides (list below)
/gold-ira-fee-calculator Tool (one page): total 10-year cost incl. spread
/how-we-rank             Methodology and scoring weights
/about /editorial-policy /disclaimer /privacy /terms /contact
```

**Starter guides (about 12):**
1. What is a gold IRA (pros and cons, who it's not for)
2. 401(k) to gold IRA rollover, step by step
3. TSP to gold IRA
4. Gold IRA fees explained, including markups and spreads
5. IRS-approved gold and silver: coins and bars that qualify, and what doesn't (proof and numismatic coins, Krugerrands)
6. Can you store IRA gold at home? (No: IRC 408(m), *McNulty* 2021)
7. Gold IRA scams and red flags (CFTC/FINRA/NASAA advisory, Red Rock, Safeguard)
8. Gold IRA taxes and RMDs, including in-kind distributions
9. Roth vs. traditional gold IRA
10. Gold IRA vs. gold ETF vs. physical gold at home
11. How much of your portfolio should be in gold (general education)
12. Silver IRA guide

## 5. UX: what changes from the hosting template

The template (ranked cards, reviews, vs pages, guides, quiz, fact tables, admin) already fits about 80% of this. The changes for this industry:

1. **Amount-first hero.** The hero asks "How much are you looking to protect?" with chips: Under $10k / $10–25k / $25–50k / $50–100k / $100k+.
   - The ranked list then reorders, or greys out companies whose minimum the visitor doesn't meet ("Requires $50k minimum").
   - This is the main UX upgrade. It also qualifies leads, which is what affiliates pay for.
2. **Second chip: account type** (401k / IRA / TSP / Cash). It tailors the rollover guide link shown under the list.
3. **"True cost" column** in the comparison table: setup + 10 years of fees, plus a "price list published?" ✓/✗. One small explainer tooltip covers markups.
4. **Accessibility for 55+ readers:**
   - Base font about 18px, high contrast, buttons at least 48px.
   - A phone number visible on mobile; no countdown timers or fake "X people viewing" popups.
   - The current template's social-proof bubble and promo popups must go, both for trust and because the FTC Consumer Reviews and Testimonials Rule bans fake social proof.
5. **Visual tone:** deep navy plus a restrained gold accent, serif headings, white space. It should feel "bank-like," not "infomercial."
6. **CTA wording:** "Get Free Gold IRA Kit" / "Visit Augusta". An affiliate-disclosure line sits next to every CTA block, not only in the footer.
7. **Optional, phase 2:** a gold spot-price strip (needs a price API) and a short "Is a gold IRA right for me?" quiz using the existing quiz component.

## 6. Compliance (must-have before launch)

- **FTC disclosure:**
  - An affiliate disclosure that is clear and impossible to miss, placed near tables and CTAs.
  - No fake, AI-written or bought reviews or testimonials.
  - Use only verbatim, linked Trustpilot quotes.
- **Not financial advice:** a disclaimer, no "guaranteed" or return promises, and never call a dealer "IRS-approved" (the IRS doesn't approve dealers).
- **YMYL standards:**
  - A named author and reviewer. Ideally hire a CFP or CPA to review rollover and tax pages.
  - Sources on every page and dated updates.
  - Link the CFTC "10 Things to Ask" advisory and SEC/state AG resources.
- **2026 figures to use:** IRA limit $7,500 (+$1,100 catch-up at 50+); 401(k) $24,500 (+$8,000 catch-up, or $11,250 at ages 60–63).

## 7. Monetization

**Apply to these programs first:**
- **Goldco** (Everflow, open to experienced affiliates).
- **Birch Gold** (per lead plus lifetime commission).
- **Noble Gold.**

**Augusta** has the highest payout but is selective. Apply once the site shows traffic. Directories quote ~$165–200 per qualified lead plus revenue share.

**What a "qualified lead" usually means:** a real phone number and email, an investable amount above the company's minimum, and often a 10+ minute call. So:
- Pass the amount-chip value through to the affiliate link where the program allows it.
- Plan for call tracking per company (phase 2).

## 8. Build approach

1. Copy the `hosting` codebase into this repo. Same Next.js 16, Tailwind 4, Vercel stack, admin page, sitemap, llms.txt, IndexNow.
2. Replace `src/lib/seeds/web-hosting.ts` with `gold-ira.ts`: providers, fact sheet (new `FactKey` set from section 3), reviews, battles, articles, FAQs.
3. Remove leftovers from earlier niches: the `online-hrt` redirects and the medical-review naming (rename to "expert review bar").
4. Add the amount/account-type filter to the homepage and the "true cost" column to the facts table.
5. Build the fee calculator page (client component, no backend).
6. Content waves:
   - **Launch:** homepage, 7 reviews, 6 "vs" pages, guides 1–7.
   - **Wave 2:** guides 8–12, the calculator, the quiz.
7. Before launch:
   - Verify every fee, minimum and rating on the live sites and record the date.
   - Swap in the affiliate links.
   - Set `ADMIN_PASSWORD`, GA and the Pixel.

## 9. Decisions needed from you

1. **Domain and brand name.** The repo is `gold-ira-companies`; is that the domain, e.g. goldiracompanies-type .com?
2. **Ranking order.** Should payout or approval drive #1, or the true-cost scoring? Recommendation: score by transparent criteria, and only rank companies that meet the bar.
3. **Lineup.** Keep Silver Gold Bull as the "low-cost" pick even if it pays nothing? Recommendation: yes, for trust.
4. **Credentialed reviewer.** Will you hire one (CFP/CPA) for the YMYL pages?
5. **Phone leads.** Are call tracking and phone leads in scope for launch, or later?

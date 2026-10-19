# Gold IRA Planet

Source for goldiraplanet.com: an independent comparison site for gold IRA companies (minimums, setup and yearly fees, buyback terms, storage and complaint history).

Built from the same Next.js template as thetopwebhosting.com. All site content (providers, rankings, reviews, comparisons, articles, FAQs) lives in `src/lib/seeds/gold-ira.ts` and `src/lib/seeds/gold-ira/`. Research notes are in `RESEARCH.md`; the site plan is in `PLAN.md`.

Providers (ranked order): American Hartford Gold, Goldco, Augusta Precious Metals, American Gold and Silver Group.

## Before launch

- Verify every fee, minimum, promotion and rating on each company's own site, BBB.org and Trustpilot, and update the "verified" date. All figures are third-party snapshots from October 2026 and the sources often disagree (see `RESEARCH.md`).
- Replace each provider's `affiliateUrl` (currently the company homepage) with your tracking link (admin > Providers).
- Logos in `public/logos` are text placeholders. Swap in the official logos (and replace `public/logo-mark.png` with the site mark).
- Add verbatim `trustpilotReviews` only from the live profiles. None are included because none could be verified.
- Re-check the OpenGraph image rewrite hashes in `next.config.ts` against the first build output.
- Set `ADMIN_PASSWORD` in Vercel (the code fallback is a placeholder).
- Set `BLOB_READ_WRITE_TOKEN` in Vercel. Ranking order and provider edits made in `/admin` are saved to Vercel Blob; without the token, saves fail and the site serves the seed data.

## Development

```bash
npm install
npm run dev
```

## Environment variables (Vercel)

- `ADMIN_PASSWORD`: password for `/admin`
- `BLOB_READ_WRITE_TOKEN`: Vercel Blob store token (admin saves and image uploads)
- `NEXT_PUBLIC_GA_ID`: Google Analytics measurement ID (optional)
- `NEXT_PUBLIC_META_PIXEL_ID`: Meta Pixel ID (optional)

import { head, put } from "@vercel/blob";
import { type SiteConfig } from "./config";
import { goldIraConfig } from "./seeds/gold-ira";

// ─────────────────────────────────────────────────────────────────────────────
// Single-vertical config store.
//
// Content (reviews, comparisons, articles, FAQs) is code-authoritative in
// src/lib/seeds/gold-ira.ts. The operator-controlled parts - the homepage
// ranking order and each company's commercial fields (affiliate link, CTA,
// highlights, Trustpilot figures, minimum and fees) - are editable in /admin
// and saved to Vercel Blob, then laid over the code seed on every read.
// Without BLOB_READ_WRITE_TOKEN (local dev) the seed is served as-is and
// saving throws, so the admin shows the error instead of pretending to save.
//
// The `vertical` argument is accepted (so existing call sites keep compiling)
// but ignored - there is only one vertical here.
// ─────────────────────────────────────────────────────────────────────────────

const BLOB_PATH = "config/gold-ira.json";

type Overrides = Pick<SiteConfig, "ranking" | "providers">;

async function readOverrides(): Promise<Partial<Overrides> | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null;
  try {
    const meta = await head(BLOB_PATH);
    const res = await fetch(`${meta.url}?v=${meta.uploadedAt.getTime()}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return (await res.json()) as Partial<Overrides>;
  } catch {
    // Not saved yet (BlobNotFoundError) or a transient read failure: fall
    // back to the seed rather than breaking every page.
    return null;
  }
}

export async function getConfig(_vertical?: string): Promise<SiteConfig> {
  const saved = await readOverrides();
  if (!saved) return goldIraConfig;

  // Providers merge by id, so a company added to the seed later still shows
  // up, and seed-only fields the CMS never saw are kept.
  const savedById = new Map((saved.providers ?? []).map((p) => [p.id, p]));
  const providers = goldIraConfig.providers.map((p) => ({ ...p, ...savedById.get(p.id) }));

  // The saved order wins (the operator may have dropped a company from the
  // list on purpose); only ids that no longer exist are filtered out.
  const ids = new Set(providers.map((p) => p.id));
  const providerOrder = saved.ranking
    ? saved.ranking.providerOrder.filter((id) => ids.has(id))
    : goldIraConfig.ranking.providerOrder;

  return {
    ...goldIraConfig,
    providers,
    ranking: {
      providerOrder,
      positions: saved.ranking?.positions?.length ? saved.ranking.positions : goldIraConfig.ranking.positions,
    },
  };
}

export async function saveConfig(config: SiteConfig, _vertical?: string): Promise<void> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("BLOB_READ_WRITE_TOKEN is not set - connect a Vercel Blob store to save admin changes.");
  }
  const overrides: Overrides = { ranking: config.ranking, providers: config.providers };
  await put(BLOB_PATH, JSON.stringify(overrides), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    cacheControlMaxAge: 60,
  });
}

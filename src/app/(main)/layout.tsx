import { DisclosureBar } from "@/components/disclosure-bar";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MetalsTicker } from "@/components/metals-ticker";

// Site chrome. Wraps every route in the (main) group (the whole site - URLs
// are unchanged by the route group): disclosure bar, metal-price ticker,
// header, footer.
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DisclosureBar />
      <MetalsTicker />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}

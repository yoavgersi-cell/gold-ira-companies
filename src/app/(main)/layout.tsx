import { DisclosureBar } from "@/components/disclosure-bar";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Site chrome. Wraps every route in the (main) group (the whole site - URLs
// are unchanged by the route group): disclosure bar, header, footer.
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DisclosureBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}

import FooterAddress from "@/components/footer/FooterAddress";
import FooterLink from "@/components/footer/FooterLink";
import FooterDeals from "@/components/footer/FooterDeals";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 mt-8 py-8">
      <div className="container mx-auto flex items-start">
        <FooterAddress />
        <FooterLink />
        <FooterDeals />
      </div>
    </footer>
  );
}

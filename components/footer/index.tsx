import FooterAddress from "@/components/footer/FooterAddress";
import FooterLink from "@/components/footer/FooterLink";
import FooterDeals from "@/components/footer/FooterDeals";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 mt-16 py-8">
      <div className="container mx-auto flex flex-col md:flex-row  items-start px-6 md:px-0">
        <FooterAddress />
        <FooterLink />
        <FooterDeals />
      </div>
    </footer>
  );
}

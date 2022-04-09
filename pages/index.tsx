import ShippingBanner from "@/components/banners/ShippingBanner";
import HomepageProductView from "@/components/product/HomepageProductView";
import HomepageSlider from "@/components/slider/HomepageSlider";
import Values from "@/components/values";
import Applayout from "@/layouts/Applayout";

export default function Home() {
  return (
    <Applayout>
      <main className="container mx-auto">
        <HomepageSlider />
        <Values />
        <HomepageProductView
          title="Weight Loss"
          tags={["Optislim", "Naturopathica", "Bondi Protein"]}
        />
        <ShippingBanner />
      </main>
    </Applayout>
  );
}

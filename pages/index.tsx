import ShippingBanner from "@/components/banners/ShippingBanner";
import HomepageSlider from "@/components/slider/HomepageSlider";
import Values from "@/components/values";
import Applayout from "@/layouts/Applayout";

export default function Home() {
  return (
    <Applayout>
      <main className="container mx-auto">
        <HomepageSlider />
        <Values />
        <ShippingBanner />
      </main>
    </Applayout>
  );
}

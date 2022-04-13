import ShippingBanner from "@/components/banners/ShippingBanner";
import HomepageProductView from "@/components/product/HomepageProductView";
import HomepageSlider from "@/components/slider/HomepageSlider";
import Values from "@/components/values";
import Applayout from "@/layouts/Applayout";

export default function Home() {
  return (
    <Applayout title="Welcome to Livehealthy stores, your health store plug">
      <main className="container mx-auto">
        <HomepageSlider />
        <Values />
        <HomepageProductView
          title="Weight Loss"
          tags={["Optislim", "Naturopathica", "Bondi Protein"]}
        />
        <HomepageProductView
          title="Sport Nutrition"
          tags={["Blessed", "Optimum Nutrition", "Wagner"]}
        />
        <ShippingBanner />
        <HomepageProductView
          title="Quit Smoking"
          tags={["Nicorette", "Nicabate", "Nicotinell"]}
        />
        <HomepageProductView
          title="Health"
          tags={["Swisse", "Manuka", "Wagner"]}
        />
        <HomepageProductView
          title="Hair Colours"
          tags={["L'Oreal", "Schwarzkopf", "Revion"]}
        />
      </main>
    </Applayout>
  );
}

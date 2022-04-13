import ShippingBanner from "@/components/banners/ShippingBanner";
import ProductSlider from "@/components/product/ProductSlider";
import HomepageSlider from "@/components/slider/HomepageSlider";
import Values from "@/components/values";
import Applayout from "@/layouts/Applayout";

export default function Home() {
  return (
    <Applayout title="Welcome to Livehealthy stores, your health store plug">
      <main className="container mx-auto">
        <HomepageSlider />
        <Values />
        <ProductSlider
          title="Weight Loss"
          tags={["Optislim", "Naturopathica", "Bondi Protein"]}
        />
        <ProductSlider
          title="Sport Nutrition"
          tags={["Blessed", "Optimum Nutrition", "Wagner"]}
        />
        <ShippingBanner />
        <ProductSlider
          title="Quit Smoking"
          tags={["Nicorette", "Nicabate", "Nicotinell"]}
        />
        <ProductSlider title="Health" tags={["Swisse", "Manuka", "Wagner"]} />
        <ProductSlider
          title="Hair Colours"
          tags={["L'Oreal", "Schwarzkopf", "Revion"]}
        />
      </main>
    </Applayout>
  );
}

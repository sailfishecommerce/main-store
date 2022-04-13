import ShippingBanner from "@/components/banners/ShippingBanner";
import ProductSlider from "@/components/slider/ProductSlider";
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
          tabColor="#4017E0"
        />
        <ProductSlider
          title="Sport Nutrition"
          tags={["Blessed", "Optimum Nutrition", "Wagner"]}
          tabColor="#C42340"
        />
        <ShippingBanner />
        <ProductSlider
          title="Quit Smoking"
          tags={["Nicorette", "Nicabate", "Nicotinell"]}
          tabColor="#50793E"
        />
        <ProductSlider
          title="Health"
          tags={["Swisse", "Manuka", "Wagner"]}
          tabColor="#C47723"
        />
        <ProductSlider
          title="Hair Colours"
          tags={["L'Oreal", "Schwarzkopf", "Revion"]}
          tabColor="#E366B8"
        />
      </main>
    </Applayout>
  );
}

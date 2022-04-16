import ShippingBanner from "@/components/banners/ShippingBanner";
import UserchoiceSlider from "@/components/slider/UserchoiceSlider";
import Applayout from "@/layouts/Applayout";

export default function SearchPage() {
  return (
    <Applayout title="Seach Page">
      <main className="container mx-auto">
        <div className="search-controls ">
          <h3 className="text-xl font-bold">
            Showing 468 results for &#34; mask &#34;
          </h3>
        </div>
        <ShippingBanner />
        <div className="mb-8" />
        <UserchoiceSlider />
      </main>
    </Applayout>
  );
}

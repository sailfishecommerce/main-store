import { Splide, SplideSlide } from "@splidejs/react-splide";

import useLiveHealthyProduct from "@/hooks/useLivehealthyProduct";
import ProductTabCard from "@/components/cards/ProductTabCard";

export default function ProductTabSlider() {
  const tabs = ["New Products", "Special Products", "Featured Products"];
  const [data, status] = useLiveHealthyProduct();

  return (
    <section className="itemSlider product-tab-slider mb-12">
      <div className="tabs flex items-center mb-6">
        {tabs.map((tab, index) => {
          const activeTab = index === 0 ? "text-black" : "text-gray-500";
          return (
            <h4 key={index} className={`${activeTab} text-2xl font-bold mr-8`}>
              {tab}
            </h4>
          );
        })}
      </div>
      <div className="tab-products flex items-center">
        {status === "error" ? (
          "unable to load products"
        ) : status === "loading" ? (
          "loading"
        ) : (
          <Splide
            options={{
              perPage: 3,
              padding:'5rem'
            }}
            className="mx-auto container"
          >
            {data.map((product: any) => (
              <SplideSlide key={product.id}>
                <ProductTabCard product={product} />
              </SplideSlide>
            ))}
          </Splide>
        )}
      </div>
    </section>
  );
}

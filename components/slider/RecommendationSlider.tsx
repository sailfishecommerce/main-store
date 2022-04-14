import { Splide, SplideSlide } from "@splidejs/react-splide";

import useLiveHealthyProduct from "@/hooks/useLivehealthyProduct";
import RecommendedProductCard from "@/components/cards/RecommendedProductCard";

export default function RecommendationSlider() {
  const [data, status] = useLiveHealthyProduct();

  return (
    <section className="itemSlider recommendation-slider">
      <div className="top mb-8">
        <h3 className="text-xl font-bold">Recommended for you</h3>
      </div>
      <div className="content">
        {status === "error" ? (
          "unable to load products"
        ) : status === "loading" ? (
          "loading"
        ) : (
          <Splide
            options={{
              perPage: 2,
              padding: "5rem",
              breakpoints: {
                800: {
                  perPage: 1,
                },
              },
            }}
          >
            {data.map((product: any) => (
              <SplideSlide key={product.id}>
                <RecommendedProductCard product={product} />
              </SplideSlide>
            ))}
          </Splide>
        )}
      </div>
    </section>
  );
}

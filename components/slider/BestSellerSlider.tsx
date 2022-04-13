import { Splide, SplideSlide } from "@splidejs/react-splide";

import Product from "@/components/cards/ProductCard";
import useLiveHealthyProduct from "@/hooks/useLivehealthyProduct";
import "@splidejs/splide/dist/css/splide.min.css";
import Container from "@/layouts/Container";

export default function BestSellerSlider() {
  const [data, status] = useLiveHealthyProduct();
  const colorsArray = ["#4017E0", "#C42340", "#50793E", "#C47723", "#E366B8"];

  function selectRandomColor() {
    const randomNumber = Math.round(Math.random() * 4);
    const randomColor = colorsArray[randomNumber];
    return randomColor;
  }

  return (
    <section className="itemSlider best-seller-slider py-8 relative w-full bg-gray-platinum mx-auto flex relative z-10 flex-col my-4">
      <div className="w-full">
        <div className="mx-auto container top mb-8 flex items-center justify-between">
          <h1 className="font-bold text-3xl">Best Sellers</h1>
        </div>

        <div className="2xl:pl-28 products mx-auto mt-4 flex items-center justify-between pb-12">
          {status === "error" ? (
            "unable to load products"
          ) : status === "loading" ? (
            "loading"
          ) : (
            <Splide
              options={{
                perPage: 5,
                padding: "5rem",
              }}
              className="w-full mx-auto"
            >
              {data.map((product: any) => (
                <SplideSlide key={product.id}>
                  <Product
                    className="mr-8 bg-white rounded-xl relative z-20"
                    color={selectRandomColor()}
                    product={product}
                  />
                </SplideSlide>
              ))}
            </Splide>
          )}
        </div>
      </div>
    </section>
  );
}

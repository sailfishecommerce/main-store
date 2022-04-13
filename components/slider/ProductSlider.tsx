import { Splide, SplideSlide } from "@splidejs/react-splide";

import Product from "@/components/cards/ProductCard";
import useLiveHealthyProduct from "@/hooks/useLivehealthyProduct";
import "@splidejs/splide/dist/css/splide.min.css";
import selectRandomColor from "@/lib/selectRandomColor";

interface Props {
  title: string;
  tags?: string[];
  tabColor?: string;
  productName?: string;
  productClassName?: string;
  randomColor?: boolean;
}
export default function ProductSlider({
  title,
  tags,
  tabColor,
  productName,
  productClassName,
  randomColor,
}: Props) {
  const [data, status] = useLiveHealthyProduct();
  const color = randomColor ? selectRandomColor() : tabColor;
  return (
    <section className="itemSlider relative container mx-auto flex flex-col my-4">
      <div className="top mb-4 flex items-center justify-between">
        {productName ? (
          <h1 className="font-bold text-xl 2xl:text-3xl">
            {title} <span className="mountain-green">{productName}</span> users
          </h1>
        ) : (
          <h1 className="font-bold text-xl 2xl:text-3xl">{title}</h1>
        )}
      </div>
      {tags && (
        <ul className="flex items-center">
          {tags.map((tag) => (
            <li
              className="productTag flex mr-2 items-center text-xs p-1 border  bg-white rounded-xl"
              key={tag}
              title={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
      <div className="products mx-auto container mt-4 flex items-center justify-between pb-12">
        {status === "error" ? (
          "unable to load products"
        ) : status === "loading" ? (
          "loading"
        ) : (
          <Splide
            options={{
              perPage: 6,
              breakpoints: {
                800: {
                  perPage: 3,
                },
                1200: {
                  perPage: 4,
                },
                1440: {
                  perPage: 5,
                },
              },
            }}
            className="container mx-auto"
          >
            {data.map((product: any) => (
              <SplideSlide key={product.id}>
                <Product
                  color={randomColor ? selectRandomColor() : tabColor}
                  product={product}
                  className={productClassName}
                />
              </SplideSlide>
            ))}
          </Splide>
        )}
      </div>
      <style jsx>
        {`
          .productTag {
            border: 1px solid ${tabColor};
            color: ${tabColor};
          }
          .productTag:hover {
            background-color: ${tabColor};
            color: white;
          }
        `}
      </style>
    </section>
  );
}

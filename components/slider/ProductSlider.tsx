import { Splide, SplideSlide } from "@splidejs/react-splide";

import Product from "@/components/product";
import useLiveHealthyProduct from "@/hooks/useLivehealthyProduct";
import "@splidejs/splide/dist/css/splide.min.css";

interface Props {
  title: string;
  tags: string[];
  tabColor: string;
}
export default function ProductSlider({ title, tags, tabColor }: Props) {
  const [data, status] = useLiveHealthyProduct();
  return (
    <section className="itemSlider relative container mx-auto flex flex-col my-4">
      <div className="top mb-4 flex items-center justify-between">
        <h1 className="font-bold text-3xl">{title}</h1>
      </div>
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
      <div className="products mx-auto container mt-4 flex items-center justify-between pb-12">
        {status === "error" ? (
          "unable to load products"
        ) : status === "loading" ? (
          "loading"
        ) : (
          <Splide
            options={{
              perPage: 6,
            }}
            className="container mx-auto"
          >
            {data.map((product: any) => (
              <SplideSlide key={product.id}>
                <Product color={tabColor} product={product} />
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

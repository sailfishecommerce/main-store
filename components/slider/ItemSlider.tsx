import { Splide, SplideSlide } from "@splidejs/react-splide";
import Product from "@/components/product";

import "@splidejs/splide/dist/css/splide.min.css";

interface Props {
  title: string;
  tags: string[];
  products: any[];
}

export default function ItemSlider({ title, tags, products }: Props) {
  return (
    <section className="container mx-auto flex flex-col">
      <Splide>
        <div className="top">
          <h1>{title}</h1>
          <div className="controls"></div>
        </div>
        <ul className="flex items-center">
          {tags.map((tag) => (
            <SplideSlide
              className="flex items-center p-4 border border-blue-500 hover:text-white text-blue-500 bg-white hover:bg-blue-500"
              key={tag}
            >
              {tag}
            </SplideSlide>
          ))}
        </ul>
        {products && (
          <div className="products flex items-center justify-between">
            {products.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </div>
        )}
      </Splide>
    </section>
  );
}

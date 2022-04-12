import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/splide.min.css";

const productTypes = ["New Products", "Special Products", "Featured Products"];
export default function ProductTypeSlider() {
  return (
    <section>
      <Splide>
        <div className="top">
          <div className="product-types flex items-center 4/6 justify-between">
            {productTypes.map((item) => (
              <h4 className="font-bold" key={item}>
                {item}
              </h4>
            ))}
          </div>
          <div className="controls 1/6"></div>
        </div>
        <SplideSlide></SplideSlide>
      </Splide>
    </section>
  );
}

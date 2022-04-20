import { Splide, SplideSlide } from "@splidejs/react-splide";

import values from "@/json/values.json";
import ValueCard from "@/components/cards/ValueCard";

export default function ValuesSlider() {
  return (
    <Splide
      options={{
        perPage: 1,
        padding: "2rem",
        breakpoints: {
          350: {
            perPage: 2,
          },
        },
      }}
      className="values-slider container mx-auto"
    >
      {values.map((value: any) => (
        <SplideSlide key={value.title}>
          <ValueCard content={value} key={value.title} />
        </SplideSlide>
      ))}
    </Splide>
  );
}

import { Splide, SplideSlide } from "@splidejs/react-splide";
import allCategoryContent from "@/json/allcategories-dropdown.json";
import { TrendLink } from "@/components/menu/TrendingLinks";

export default function TrendingLinkSlider() {
  return (
    <Splide
      options={{
        perPage: 3,
        padding: "2rem",
        breakpoints: {
          500: {
            perPage: 2,
          },
          800: {
            perPage: 3,
          },
        },
      }}
      className="mx-auto container trendingLinks"
    >
      {allCategoryContent.main.trending.map((trendingItem: any) => (
        <SplideSlide key={trendingItem.link}>
          <TrendLink trendingItem={trendingItem} />
        </SplideSlide>
      ))}
    </Splide>
  );
}

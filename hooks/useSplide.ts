import dynamic from "next/dynamic";

const Splide = dynamic((): any =>
  import("@splidejs/react-splide").then((mod) => mod.Splide)
);

const SplideSlide = dynamic((): any =>
  import("@splidejs/react-splide").then((mod) => mod.SplideSlide)
);

export default function useSplide(): any {
  return { Splide, SplideSlide };
}

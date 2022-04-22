import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import dynamic from "next/dynamic";
import { memo, useState } from "react";

import homepageSliderContent from "@/json/homepage-slider.json";
import "@splidejs/splide/dist/css/splide.min.css";
import { useMediaQuery } from "@/hooks";
import Link from "next/link";

const DynamicHomepageSliderControls = dynamic(
  () => import("@/components/slider/HomepageSliderControls")
);

function HomepageSliderComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileWidth = useMediaQuery("(max-width:768px)");

  return (
    <section className="mt-6 md:mb-12 mb-8 homepage-slider container mx-auto">
      <Splide onActive={(item) => setActiveIndex(item.index)}>
        {homepageSliderContent.map((content) => (
          <SplideSlide key={content.title}>
            <div className="content px-4 md:px-0 flex flex-col md:flex-row w-full h-100">
              <div className="text order-2 md:order-1 rounded-b-xl md:rounded-l-3xl bg-gray-100 p-6 md:p-8 w-full md:w-1/4">
                <div className="top flex items-center mb-6 justify-between">
                  <h1 className="text-2xl font-bold">{content.title}</h1>
                  <span className="font-bold text-red-500 bg-white rounded-md py-1 text-xs px-2 hover:bg-red-500 hover:text-white">
                    {content.category}
                  </span>
                </div>
                <p className="mb-2 text-sm">{content.description}</p>
                <Link href="/collection" passHref>
                  <button className="view-collection rounded-md py-1 px-2 text-white mt-6 md:mt-12 2xl:mt-20">
                    View collection
                  </button>
                </Link>
              </div>
              <div className="image order-1 md:order-2 w-full md:w-3/4">
                <Image
                  src={content.image}
                  height={500}
                  width={1300}
                  alt={content.title}
                  className="rounded-t-xl md:rounded-l-none md:rounded-r-3xl"
                  layout="responsive"
                  priority
                />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      {!mobileWidth && (
        <DynamicHomepageSliderControls
          content={homepageSliderContent}
          activeIndex={activeIndex}
        />
      )}
      <style jsx>
        {`
          .view-collection {
            background-color: var(--mountain-green);
          }
          .view-collection:hover {
            background-color: var(--mountain-mist);
          }
        `}
      </style>
    </section>
  );
}

const HomepageSlider = memo(HomepageSliderComponent);
export default HomepageSlider;

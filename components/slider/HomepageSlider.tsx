import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { useState } from "react";

import homepageSliderContent from "@/json/homepage-slider.json";
import HomepageSliderControls from "@/components/slider/HomepageSliderControls";
import "@splidejs/splide/dist/css/splide.min.css";

export default function HomepageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="mt-8 mb-12 homepage-slider">
      <Splide onActive={(item) => setActiveIndex(item.index)}>
        {homepageSliderContent.map((content) => (
          <SplideSlide key={content.title}>
            <div className="content flex w-full h-100">
              <div className="text rounded-l-3xl bg-gray-100 p-8 w-1/4">
                <div className="top flex items-center mb-6 justify-between">
                  <h1 className="text-2xl font-bold">{content.title}</h1>
                  <span className="font-bold text-red-500 bg-white rounded-md py-1 text-xs px-2 hover:bg-red-500 hover:text-white">
                    {content.category}
                  </span>
                </div>
                <p className="mb-2 text-sm">{content.description}</p>
                <button className="view-collection rounded-md py-1 px-2 text-white mt-20">
                  View collection
                </button>
              </div>
              <div className="image w-3/4">
                <Image
                  src={content.image}
                  height={500}
                  width={1300}
                  alt={content.title}
                  className="rounded-r-3xl"
                  layout="responsive"
                  priority
                />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <HomepageSliderControls
        content={homepageSliderContent}
        activeIndex={activeIndex}
      />
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

import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

import homepageSliderContent from "@/json/homepage-slider.json";
import HomepageSliderControls from "@/components/slider/HomepageSliderControls";
import "@splidejs/splide/dist/css/splide.min.css";

export default function HomepageSlider() {
  return (
    <section className="mt-8 mb-8">
      <Splide>
        {homepageSliderContent.map((content) => (
          <SplideSlide key={content.title}>
            <div className="content flex w-full h-100">
              <div className="text rounded-l-3xl bg-gray-100 p-8 w-1/4">
                <div className="top flex items-center mb-6 justify-between">
                  <h1 className="text-2xl font-bold">{content.title}</h1>
                  <span className="font-bold text-red-500 bg-white rounded-md py-2 text-sm px-3 hover:bg-red-500 hover:text-white">
                    {content.category}
                  </span>
                </div>
                <p className="mb-4 text-lg">{content.description}</p>
                <button className="view-collection rounded-md py-2 px-4 text-white">
                  View collection
                </button>
              </div>
              <div className="image w-3/4">
                <Image
                  src={content.image}
                  height={600}
                  width={1300}
                  alt={content.title}
                  className="rounded-r-3xl"
                  layout="responsive"
                />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <HomepageSliderControls content={homepageSliderContent} />
      <style jsx>
        {`
          .view-collection {
            background-color: var(--mountain-green);
          }
        `}
      </style>
    </section>
  );
}

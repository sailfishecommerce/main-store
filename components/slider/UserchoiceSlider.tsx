import { Splide, SplideSlide } from "@splidejs/react-splide";

import userChoice from "@/json/user-choice.json";
import "@splidejs/splide/dist/css/splide.min.css";
import UserChoiceCard from "@/components/cards/UserChoiceCard";

export default function UserchoiceSlider() {
  return (
    <section className="container mx-auto px-4 md:px-0 userchoice-slider itemSlider">
      <h1 className="text-2xl my-4 font-bold">User Choice</h1>
      <div className="user-choice flex items-center w-full">
        <Splide
          options={{
            perPage: 3,
            breakpoints: {
              500: {
                perPage: 1,
                padding: "3rem",
              },
              1000: {
                perPage: 2,
              },
            },
          }}
          className="w-full"
        >
          <div className="trustmate-card w-1/5"></div>
          {userChoice.map((choice: any) => (
            <SplideSlide key={choice.username}>
              <UserChoiceCard choice={choice} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}

import { Splide, SplideSlide } from "@splidejs/react-splide";

import userChoice from "@/json/user-choice.json";
import "@splidejs/splide/dist/css/splide.min.css";
import UserChoiceCard from "@/components/cards/UserChoiceCard";

export default function UserchoiceSlider() {
  return (
    <section className="userchoice-slider itemSlider">
      <h1 className="text-2xl my-4 font-bold">User Choice</h1>
      <div className="user-choice flex items-center w-full">
        <div className="trustmate-card w-1/5"></div>
        <Splide
          options={{
            perPage: 3,
          }}
          className="w-4/5"
        >
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

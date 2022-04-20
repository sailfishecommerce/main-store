import ValueCard from "@/components/cards/ValueCard";
import { useMediaQuery } from "@/hooks";
import values from "@/json/values.json";
import ValuesSlider from "../slider/ValuesSlider";

export default function Values() {
  const tabWidth = useMediaQuery("(max-width:768px)");

  return (
    <section className="container values mx-auto mb-8 px-4 md:px-0">
      {tabWidth ? (
        <ValuesSlider />
      ) : (
        <div className="row flex md:grid md:grid-cols-4 md:gap-8 my-4 items-center justify-between w-full">
          {values.map((value) => (
            <ValueCard content={value} key={value.title} />
          ))}
        </div>
      )}
      <style jsx>
        {`
          @media (max-width: 768px) {
            .values .row {
              overflow-x: scroll;
              width: 100vw;
            }
          }
        `}
      </style>
    </section>
  );
}

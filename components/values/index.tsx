import ValueCard from "@/components/cards/ValueCard";
import values from "@/json/values.json";

export default function Values() {
  return (
    <section className="container values mx-auto mb-8 px-4 md:px-0">
      <div className="row flex md:grid md:grid-cols-4 gap-6 md:gap-8 my-4 items-center justify-between w-full">
        {values.map((value) => (
          <ValueCard content={value} key={value.title} />
        ))}
      </div>
      <style jsx>
        {`
          .values .row {
            overflow-x: auto;
          }
        `}
      </style>
    </section>
  );
}

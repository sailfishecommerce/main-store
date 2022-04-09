import ValueCard from "@/components/cards/ValueCard";
import values from "@/json/values.json";

export default function Values() {
  return (
    <div className="grid grid-cols-4 gap-8 my-4 items-center justify-between mb-8">
      {values.map((value) => (
        <ValueCard content={value} key={value.title} />
      ))}
    </div>
  );
}

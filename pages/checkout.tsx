import ReviewOrder from "@/components/reviews/ReviewOrder";
import Applayout from "@/layouts/Applayout";

export default function Checkout() {
  return (
    <Applayout title="Checkout - Thanks for shopping with us">
      <main className="mx-auto container">
        <ReviewOrder />
      </main>
    </Applayout>
  );
}

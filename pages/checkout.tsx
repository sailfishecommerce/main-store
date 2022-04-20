import Applayout from "@/layouts/Applayout";
import CheckoutCustomer from "@/components/checkout";

export default function Checkout() {
  return (
    <Applayout title="Checkout - Thanks for shopping with us">
      <main className="mx-auto bg-light-gray">
        <CheckoutCustomer />
      </main>
    </Applayout>
  );
}

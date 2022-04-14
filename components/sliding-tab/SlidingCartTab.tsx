import SlidingTab from "@/components/sliding-tab";
import { useCart } from "@/hooks";
import ProductRow from "../product/ProductRow";

export default function SlidingCartTab() {
  const { useCartData } = useCart();
  const { data: cart }: any = useCartData();
  console.log("cart", cart);
  return (
    <SlidingTab>
      <div className="cart bg-white w-full h-full p-6">
        <h3 className="text-xl font-medium flex items-center">
          Cart{" "}
          <span className="rounded-full text-sm ml-2 py-1 -mt-4 px-2 text-white bg-tan-hide">
            {cart?.items?.length}
          </span>
        </h3>
        <div className="content">
          {cart?.items.map((cart: any) => (
            <ProductRow key={cart.id} cart={cart} />
          ))}
        </div>
      </div>
    </SlidingTab>
  );
}

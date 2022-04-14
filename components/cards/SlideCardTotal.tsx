import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

import { useCart } from "@/hooks";
import type { cartType } from "@/types";

export default function SlideCardTotal() {
  const { useCartData } = useCart();
  const { data: cart }: cartType | any = useCartData();

  return (
    <div className="shadow-lg bg-white p-6">
      <div className="total flex items-center">
        <h4 className="text-gray-500 mr-8">Total: HK$ 180</h4>{" "}
        <div className="discount border px-2 py-1 border-red-500">Discount: HK$ 136</div>
      </div>
      <h1 className="text-2xl">Subtotal: HK$ {cart?.subTotal}</h1>
      <div className="discount">

      </div>
      <button className="bg-tan-hide w-full flex items-center">Secure checkout <HiOutlineArrowNarrowRight /></button>
    </div>
  );
}

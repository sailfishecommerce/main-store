import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { useCart } from "@/hooks";
import type { cartType } from "@/types";
import AppliedDiscountTag from "../tag/AppliedDiscountTag";

export default function SlideCardTotal() {
  const { useCartData } = useCart();
  const { data: cart }: cartType | any = useCartData();

  const appliedDiscounts = [
    "10% Off On All Vitamins",
    "Buy 2 Get $30 Off!",
    "Free Shipping",
  ];

  return (
    <div className="shadow-lg bg-white p-6  fixed right-0">
      <div className="total flex items-center">
        <h4 className="text-gray-500 mr-8">Total: HK$ 180</h4>{" "}
        <div className="discount rounded-md border text-sm text-red-500 hover:bg-red-500 hover:text-white px-2 py-1 border-red-500">
          Discount: HK$ 136
        </div>
      </div>
      <h1 className="text-xl font-medium mt-2">
        Subtotal: HK$ {cart?.subTotal}
      </h1>
      <div className="discount flex items-center justify-between my-4">
        <div className="input-wrapper w-1/2 relative">
          <div className="text absolute left-1 top-1 w-3/4 bg-white">
            <p className="text-xs mb-0">Promocode</p>
            <h4 className="text-sm">BONUS-CODE</h4>
          </div>
          <input
            placeholder="Enter promocode"
            type="text"
            className="border rounded-lg px-2 py-2"
          />
        </div>
        <button className="rounded-xl bg-mountain-green text-white p-2 py-3 text-sm font-medium w-2/5">
          Add discount code
        </button>
      </div>
      <div className="applied-discounts">
        <h3 className="font-bold text-sm">Applied Discounts</h3>
        <div className="applied-discounts-tags flex flex-wrap">
          {appliedDiscounts.map((discount, index) => (
            <AppliedDiscountTag discountTitle={discount} count={index} />
          ))}
        </div>
      </div>
      <button className="bg-tan-hide w-full flex items-center">
        Secure checkout <HiOutlineArrowNarrowRight />
      </button>
    </div>
  );
}

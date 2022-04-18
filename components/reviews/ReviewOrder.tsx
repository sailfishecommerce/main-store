import Image from "next/image";
import { FaTimes } from "react-icons/fa";

import CheckoutCard from "@/components/cards/CheckoutCard";
import { useCart } from "@/hooks";
import FormattedPrice from "@/components/price/FormattedPrice";
import ShippingMethod from "@/components/shipping/ShippingMethod";
import type { cartType } from "@/types";

export default function ReviewOrder() {
  const { useCartData } = useCart();
  const { data: cart }: cartType | any = useCartData();

  return (
    <CheckoutCard title="1. Review Your Order">
      <ul className="cart-items border-b pb-6">
        {cart?.items.map((item: any, index: number) => (
          <li key={index}>
            <Image
              src={item.images[0].file.url}
              alt={item.name}
              height={150}
              width={150}
              className="rounded-xl"
              blurDataURL={item.images[0].file.url}
            />
            <div className="content">
              <h4>{item.name}</h4>
              <div className="controls flex items-center justify-between">
                <div className="item-count border rounded-xl flex items-center font-bold">
                  {item.quantity}
                </div>
                <button>
                  <FaTimes size={30} />
                </button>
                <FormattedPrice price={item.price} className="font-bold" />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ShippingMethod />
    </CheckoutCard>
  );
}

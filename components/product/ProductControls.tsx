import { cartType } from "@/types";
import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
interface Props {
  cart: cartType;
  updateQuantity: any;
}

export default function ProductControls({ cart, updateQuantity }: Props) {
  const [counter, setCounter] = useState(cart.quantity);

  function increaseQuantity() {
    setCounter(counter + 1);
  }

  function decreaseQuantity() {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }

  useEffect(() => {
    updateQuantity.mutate({ product: cart, quantity: counter });
  }, [counter]);

  return (
    <div className="flex items-center border rounded-md">
      <button
        title="decrease quantity"
        className="w-8 h-8 flex justify-center items-center rounded-lg hover:bg-red-500 hover:text-white"
        onClick={decreaseQuantity}
      >
        <AiOutlineMinus />
      </button>
      <input
        className="w-16 h-8 flex items-center text-center justify-between rounded-md"
        type="text"
        readOnly
        value={cart.quantity}
      />
      <button
        title="increase quantity"
        className="w-8 h-8 flex justify-center items-center rounded-lg hover:bg-green-500 hover:text-white"
        onClick={increaseQuantity}
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
}

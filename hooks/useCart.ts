import { useQuery } from "react-query";

import useToast from "@/hooks/useToast";
import useSwellCart from "@/hooks/useSwellCart";

export default function useCart() {
  const { isLoading, isSuccessful, hasError } = useToast();
  const { applyGiftCode, getACart } = useSwellCart();

  const useCartData = () => useQuery("cart", getACart);

  function applyDiscountCode(code: string) {
    const loading = isLoading();
    return applyGiftCode(code)
      .then((response) => {
        isSuccessful(loading, response?.message);
        return response;
      })
      .catch((error) => {
        hasError(loading, error?.message);

        return error;
      });
  }

  return {
    applyDiscountCode,
    useCartData,
  };
}

import { productOptionType, productType } from "@/types";
import axios from "axios";
import useSwell from "@/hooks/useSwell";

export default function useSwellCart() {
  const { swellInit } = useSwell();

  async function getACart() {
    const { swell } = await swellInit();
    return await swell.cart.get();
  }

  async function addToCart(product: productType, quantity: number) {
    const { swell } = await swellInit();
    return await swell.cart.addItem({
      product_id: product.id,
      quantity,
    });
  }

  async function addToCartModal(
    product: productType,
    productQuantity: any,
    productOptions: productOptionType
  ) {
    const { swell } = await swellInit();
    return await swell.cart.addItem({
      product_id: product.id,
      quantity: productQuantity,
      options: productOptions,
    });
  }

  async function updateCartItem(product: any) {
    const { swell } = await swellInit();
    return await swell.cart.updateItem(product.id, product.updateData);
  }

  async function updateCartItemQuantity(
    product: productType,
    quantity: number
  ) {
    const { swell } = await swellInit();
    return await swell.cart.updateItem(product.id, {
      quantity,
    });
  }

  async function removeCartItem(product: { id: string }) {
    const { swell } = await swellInit();
    return await swell.cart.removeItem(product.id);
  }

  async function emptyCart() {
    const { swell } = await swellInit();
    return await swell.cart.setItems([]);
  }

  async function submitOrder() {
    const { swell } = await swellInit();
    return await swell.cart.submitOrder();
  }

  async function deleteCart(cartId: string) {
    return await axios.post("/api/cart/delete", {
      id: cartId,
    });
  }

  async function applyGiftCode(code: string) {
    const { swell } = await swellInit();
    return await swell.cart.applyCoupon(code);
  }

  async function updateCartAccountID(account_id: string) {
    const { swell } = await swellInit();
    await swell.cart.update({ account_id });
  }
  async function updateCart(account: any) {
    const { swell } = await swellInit();
    await swell.cart.update(account);
  }

  return {
    getACart,
    addToCart,
    updateCartItem,
    removeCartItem,
    updateCartItemQuantity,
    emptyCart,
    submitOrder,
    applyGiftCode,
    deleteCart,
    addToCartModal,
    updateCartAccountID,
    updateCart,
  };
}

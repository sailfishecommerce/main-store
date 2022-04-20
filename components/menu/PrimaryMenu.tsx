import Logo from "@/components/logo";
import MenuLinks from "@/components/menu/MenuLinks";
import { useMediaQuery } from "@/hooks";
import MobilePrimaryMenu from "@/components/menu/MobilePrimaryMenu";
import { useCart } from "@/hooks";

export default function PrimaryMenu() {
  const mobileWidth = useMediaQuery("(max-width:768px)");
  const { useCartData } = useCart();
  const { data: cart }: any = useCartData();
  return (
    <div className="flex justify-between items-center md:my-2 md:py-4">
      <Logo className="w-1/3 md:w-44" />
      {mobileWidth ? (
        <MobilePrimaryMenu cart={cart} />
      ) : (
        <MenuLinks cart={cart} />
      )}
    </div>
  );
}

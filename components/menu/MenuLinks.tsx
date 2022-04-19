import Link from "next/link";
import Image from "next/image";
import { IoPersonOutline } from "react-icons/io5";

import { useCart } from "@/hooks";
import menuLinks from "@/json/menu.json";
import useSlidingTab from "@/hooks/useSlidingTab";

export default function MenuLinks() {
  const { useCartData } = useCart();
  const { data: cart }: any = useCartData();
  const { updateSlideTab } = useSlidingTab();

  return (
    <>
      <div className="hidden md:flex items-center">
        <Image
          src="/whatsappIcon.png"
          alt="cart"
          title="contact us on whatsapp"
          height={25}
          width={25}
        />
        <span className="font-bold text-green-500 mx-1">Whatsapp:</span>
        9449 2060
      </div>
      <ul className="hidden md:flex items-center justify-between w-1/3">
        {menuLinks.primaryMenu.map((menuItem) => (
          <li className="mx-2" key={menuItem.link}>
            <Link href={menuItem.link} passHref>
              <a
                title={menuItem.text}
                className="hover:text-green-500 font-light"
              >
                {menuItem.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="icons flex items-center justify-between w-16">
        <button
          onClick={() => updateSlideTab("SLIDING-CART")}
          className="cart-icon relative"
        >
          <Image
            src="/cartIcon.png"
            alt="cart"
            title="cart"
            height={25}
            width={25}
          />
          <div className="bg-yellow-500 rounded-full flex items-center text-white justify-center -mt-8 text-xs ml-2 z-5 absolute h-4 w-4">
            {cart?.items?.length}
          </div>
        </button>
        <Link href="/account" passHref>
          <button title="account" className="account">
            <IoPersonOutline className="hover:text-green-500" size={20} />
          </button>
        </Link>
      </div>
    </>
  );
}

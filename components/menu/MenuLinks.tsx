import Link from "next/link";
import Image from "next/image";
import { IoPersonOutline } from "react-icons/io5";
import { GrLogin, GrLogout } from "react-icons/gr";

import menuLinks from "@/json/menu.json";
import useSlidingTab from "@/hooks/useSlidingTab";
import PageLink from "@/components/menu/PageLink";
import CartIcon from "../icons/CartIcon";

export default function MenuLinks({ cart }: any) {
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
      <ul className="hidden lg:flex items-center justify-between w-1/3">
        {menuLinks.primaryMenu.map((menuItem, index) => (
          <PageLink key={index} menuItem={menuItem} />
        ))}
      </ul>
      <div className="icons flex items-center justify-between w-16">
        <button className="flex items-center">
          <GrLogin className="mr-4" />
          <GrLogout className="mr-2" />
        </button>
        <button
          onClick={() => updateSlideTab("SLIDING-CART")}
          className="cart-icon relative"
        >
          <CartIcon color="black" />
          {cart?.items?.length && (
            <div className="bg-yellow-500 rounded-full flex items-center text-white justify-center -mt-8 text-xs ml-2 z-5 absolute h-4 w-4">
              {cart?.items?.length}
            </div>
          )}
        </button>
        <Link href="/account" passHref>
          <button title="account" className="account">
            <IoPersonOutline className="hover:text-green-500 ml-2" size={20} />
          </button>
        </Link>
      </div>
    </>
  );
}

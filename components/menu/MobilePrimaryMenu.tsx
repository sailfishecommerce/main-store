import { BsSearch } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

import useNav from "@/hooks/useNav";
import CartIcon from "@/components/icons/CartIcon";
import useSlidingTab from "@/hooks/useSlidingTab";

export default function MobilePrimaryMenu({ cart }: any) {
  const { showMobileSearch, toggleSearch, mobileMenu, toggleMobileMenu } =
    useNav();
  const { updateSlideTab } = useSlidingTab();
  return (
    <div className="flex items-center w-2/5 justify-between">
      <span className="mr-4 flex items-center">
        <button
          className="cart-icon relative mx-2"
          onClick={() => updateSlideTab("SLIDING-CART")}
        >
          <CartIcon color="black" />
          <div className="bg-yellow-500 rounded-full flex items-center text-white justify-center -mt-8 text-xs ml-2 z-5 absolute h-4 w-4">
            {cart?.items?.length}
          </div>
        </button>
        <Link href="/account" passHref>
          <button title="account" className="account">
            <IoPersonOutline className="hover:text-green-500" size={20} />
          </button>
        </Link>
        {!showMobileSearch && (
          <button onClick={toggleSearch} className="mx-2">
            <BsSearch />
          </button>
        )}
      </span>
      <button onClick={toggleMobileMenu}>
        {!mobileMenu ? <HiMenuAlt4 /> : <FaTimes />}
      </button>
    </div>
  );
}

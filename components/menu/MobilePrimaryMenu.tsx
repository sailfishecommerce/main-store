import { BsSearch, BsCart3 } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";

import useNav from "@/hooks/useNav";

export default function MobilePrimaryMenu() {
  const { showMobileSearch, toggleSearch } = useNav();

  return (
    <div className="flex items-center w-2/5 justify-between">
      <span className="mr-4 flex items-center">
        <button className="mx-2">
          <BsCart3 autoReverse={true} />
        </button>
        <button className="mx-2">
          <IoPersonOutline />
        </button>
        {!showMobileSearch && (
          <button onClick={toggleSearch} className="mx-2">
            <BsSearch />
          </button>
        )}
      </span>
      <HiMenuAlt4 />
    </div>
  );
}

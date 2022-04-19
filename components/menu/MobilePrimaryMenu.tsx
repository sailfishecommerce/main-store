import { BsSearch, BsCart3 } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";

export default function MobilePrimaryMenu() {
  return (
    <div className="flex items-center">
      <span className="mr-4 flex items-center">
        <BsCart3 autoReverse className="mx-2" />
        <IoPersonOutline className="mx-2" />
        <BsSearch className="mx-2" />
      </span>
      <HiMenuAlt4 />
    </div>
  );
}

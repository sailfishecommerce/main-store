import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";

import AllCategoriesDropdownView from "@/components/dropdown/AllCategoriesDropdownView";

export default function AllCategoriesDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);

  function toggleDropdown(){
    return setShowDropdown(!showDropdown)
  }
  return (
    <>
      <button
        className="allCategories flex items-center font-bold hover:bg-green-500 text-white rounded-md p-3"
        type="button"
        onClick={toggleDropdown}
      >
        <HiMenuAlt4 className="mr-2" /> Categories
      </button>
      {showDropdown && (
        <AllCategoriesDropdownView updateDropdown={toggleDropdown} />
      )}
      <style jsx>
        {`
          .allCategories {
            background-color: var(--mountain-green);
          }
        `}
      </style>
    </>
  );
}

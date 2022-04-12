import Link from "next/link";
import Image from "next/image";

import allCategoryContent from "@/json/allcategories-dropdown.json";
import CategorySidebarList from "@/components/dropdown/CategorySidebarList";
import CategoryMainList from "@/components/dropdown/CategoryMainList";

interface Props {
  updateDropdown: () => void;
}

export default function AllCategoriesDropdownView({ updateDropdown }: Props) {
  return (
    <div className="absolute w-full bg-white h-full left-0 top-60 flex flex-col">
      <div className="content bg-white h-3/5 z-40 left-0 top-20 mx-auto flex justify-start justify-between container">
        <CategorySidebarList />
        <CategoryMainList />
      </div>
      <div
        onClick={updateDropdown}
        className="overlay-wrapper flex z-30 w-full h-2/5 flex left-0"
      ></div>
      <style jsx>
        {`
          .overlay-wrapper {
            background: rgba(8, 7, 8, 0.32);
          }
        `}
      </style>
    </div>
  );
}

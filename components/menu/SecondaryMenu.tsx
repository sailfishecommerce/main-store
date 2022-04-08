import Link from "next/link";

import menuLinks from "@/json/menu.json";
import AllCategoriesDropdown from "@/components/dropdown/AllCategoriesDropdown";

export default function SecondaryMenu() {
  return (
    <div className="flex items-center justify-between">
      <AllCategoriesDropdown />
      <ul className="flex items-center w-2/3 justify-between">
        {menuLinks.secondaryMenu.map((menuItem) => (
          <li key={menuItem.link}>
            <Link href={menuItem.link} passHref>
              <a>{menuItem.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

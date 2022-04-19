import Link from "next/link";

import menuLinks from "@/json/menu.json";
import AllCategoriesDropdown from "@/components/dropdown/AllCategoriesDropdown";
import HomepageSearch from "@/components/search/HomepageSearch";

export default function SecondaryMenu() {
  return (
    <div className="md:flex items-center justify-between">
      <AllCategoriesDropdown />
      <ul className="flex items-center w-2/3 justify-between">
        {menuLinks.secondaryMenu.map((menuItem) => (
          <li key={menuItem.link}>
            <Link href={menuItem.link} passHref>
              <a
                title={menuItem.text}
                className="font-bold hover:text-green-500"
              >
                {menuItem.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <HomepageSearch />
    </div>
  );
}

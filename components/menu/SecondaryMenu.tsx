import Link from "next/link";

import AllCategoriesDropdown from "@/components/dropdown/AllCategoriesDropdown";
import HomepageSearch from "@/components/search/HomepageSearch";
import useCategoryData from "@/hooks/useCategoryData";

export default function SecondaryMenu() {
  const [data, status] = useCategoryData();

  const categories = status === "success" ? data?.results.slice(12, 20) : [];

  return (
    <div className="md:flex items-center justify-between py-2">
      <AllCategoriesDropdown />
      <ul className="hidden lg:flex items-center w-2/3 justify-between">
        {categories.length > 1
          ? categories.map((menuItem: { slug: string; name: string }) => (
              <li key={menuItem.slug}>
                <Link href={`/collection/${menuItem.slug}`} passHref>
                  <a
                    title={menuItem.name}
                    className="font-bold hover:text-green-500"
                  >
                    {menuItem.name}
                  </a>
                </Link>
              </li>
            ))
          : null}
      </ul>
      <HomepageSearch />
    </div>
  );
}

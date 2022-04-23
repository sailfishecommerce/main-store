import AllCategoriesDropdown from "@/components/dropdown/AllCategoriesDropdown";
import HomepageSearch from "@/components/search/HomepageSearch";
import useCategoryData from "@/hooks/useCategoryData";
import PageLink from "@/components/menu/PageLink";

export default function SecondaryMenu() {
  const [data, status] = useCategoryData();

  const categories = status === "success" ? data?.results.slice(12, 20) : [];
  console.log("data", data);
  return (
    <div className="md:flex items-center justify-between py-2">
      <AllCategoriesDropdown />
      <ul className="hidden lg:flex items-center w-2/3 justify-between">
        {categories.length > 1
          ? categories.map((menuItem: { slug: string; name: string }) => (
              <PageLink
                key={menuItem.slug}
                menuItem={menuItem}
                link="collection"
                className="font-semibold hover:text-green-500 lg:text-sm xl:text-lg"
              />
            ))
          : null}
      </ul>
      <HomepageSearch />
    </div>
  );
}

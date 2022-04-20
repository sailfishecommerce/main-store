import Link from "next/link";
import allCategoryContent from "@/json/allcategories-dropdown.json";

export default function CategoryLinks() {
  return (
    <ul className="category-list border-r mr-8 w-full">
      {allCategoryContent.sidebar[0].map((item) => {
        return item.link ? (
          <li key={item.link} className="sidebar-list p-2 my-2 w-full">
            <Link href={item.link} passHref>
              <a className="text-black">{item.title}</a>
            </Link>
          </li>
        ) : null;
      })}
    </ul>
  );
}

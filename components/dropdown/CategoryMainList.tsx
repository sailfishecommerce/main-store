import Link from "next/link";

import allCategoryContent from "@/json/allcategories-dropdown.json";
import TrendingLinks from "@/components/menu/TrendingLinks";

export default function CategoryMainList() {
  return (
    <div className="category-main mb-8 w-4/5 px-6">
      <h1 className="text-lg mb-6 font-medium">Trending</h1>
      <TrendingLinks />
      <div className="medicines mt-6">
        <h1 className="text-lg mb-4 font-medium">Medicines</h1>
        <ul className="grid grid-cols-3 gap-4">
          {allCategoryContent.main.medicines.map((medicineType, index) => {
            const backgroundColor = medicineType?.color;
            return (
              <li key={index} title={medicineType.name}>
                <Link passHref href={medicineType.link}>
                  <a className="hover:text-red-500">
                    {medicineType.name}
                    {medicineType.tag && (
                      <span
                        style={{ backgroundColor: backgroundColor }}
                        className="tag mx-2 rounded-full py-1 px-2 text-xs"
                      >
                        {medicineType.tag}
                      </span>
                    )}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <style jsx>
        {`
          .trending:hover p {
            color: red;
          }
        `}
      </style>
    </div>
  );
}

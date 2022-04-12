import Link from "next/link";
import Image from "next/image";

import allCategoryContent from "@/json/allcategories-dropdown.json";

export default function AllCategoriesDropdownView() {
  return (
    <div className="overlay-wrapper absolute w-full bg-white h-full left-0 top-60 flex flex-col">
      <div className="content bg-white h-3/5 z-40 left-0 top-20 mx-auto flex justify-start justify-between=container">
        <div className="category-sidebar flex flex-col w-1/5">
          {allCategoryContent.sidebar.map((sidebarItems, index) => {
            const sidebarStyle =
              index === 0 ? "border-b border-gray-200 pb-4" : "py-4";
            return (
              <ul
                className={`${sidebarStyle} border-r mr-8 w-full`}
                key={index}
              >
                {sidebarItems.map((item) => {
                  return item.link ? (
                    <li className="sidebar-list p-2 my-2 w-full">
                      <Link href={item.link} passHref>
                        <a className="text-black">{item.title}</a>
                      </Link>
                    </li>
                  ) : (
                    <h1 className="text-xl font-bold mb-3">{item.title}</h1>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="category-main mb-8 w-4/5 px-6">
          <h1 className="text-lg mb-6 font-medium">Trending</h1>
          <ul className="trendings flex items-center justify-between w-full">
            {allCategoryContent.main.trending.map((trendingItem, index) => (
              <li
                key={index}
                title={trendingItem.name}
                className="trending-item"
              >
                <Link href={trendingItem.link} passHref>
                  <a className="trending">
                    <Image
                      src={trendingItem.image}
                      height={120}
                      width={180}
                      className="hover:scale-105"
                      alt={trendingItem.name}
                    />
                    <p className="text-center font-light">
                      {trendingItem.name}
                    </p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
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
        </div>
      </div>
      <div className="overlay-wrapper bg-gray-500 -opacity-60 flex z-30 w-full h-2/5 flex left-0"></div>
      <style jsx>
        {`
          .sidebar-list:hover {
            background-color: #ffe690;
          }
          .sidebar-list:hover a {
            font-weight: 600;
          }
          .trending:hover p {
            color: red;
          }
          .overlay-wrappe{
            background-color: #08070852;
          }
        `}
      </style>
    </div>
  );
}

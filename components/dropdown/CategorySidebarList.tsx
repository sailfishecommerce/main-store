import Link from "next/link";

import allCategoryContent from "@/json/allcategories-dropdown.json";

export default function CategorySidebarList() {
  return (
    <div className="category-sidebar flex flex-col w-1/5">
      {allCategoryContent.sidebar.map((sidebarItems, index) => {
        const sidebarStyle =
          index === 0 ? "border-b border-gray-200 pb-2" : "py-2";
        return (
          <div key={index} className="section">
            {sidebarItems.map((item) => {
              return (
                !item.link && (
                  <h1 key={item.title} className="text-xl font-bold my-1">
                    {item.title}
                  </h1>
                )
              );
            })}
            <ul
              className={`${sidebarStyle} category-list border-r mr-8 w-full`}
              key={index}
            >
              {sidebarItems.map((item) => {
                return item.link ? (
                  <li key={item.link} className="sidebar-list p-2 my-2 w-full">
                    <Link href={item.link} passHref>
                      <a className="text-black">{item.title}</a>
                    </Link>
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        );
      })}
      <style jsx>
        {`
          .category-list {
            max-height: 200px;
            overflow-y: scroll;
          }
          .sidebar-list:hover {
            background-color: #ffe690;
          }
          .sidebar-list:hover a {
            font-weight: 600;
          }
        `}
      </style>
    </div>
  );
}

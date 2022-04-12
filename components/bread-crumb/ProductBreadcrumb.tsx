import Link from "next/link";
import { AiOutlineMinus } from "react-icons/ai";

interface Props {
  breadcrumbItem: string;
}

export default function ProductBreadcrumb({ breadcrumbItem }: Props) {
  const breadcrumbItems = [
    { name: "Homepage", link: "/" },
    { name: "All", link: "#products" },
    { name: breadcrumbItem, link: "/products", active: true },
  ];
  return (
    <ul className="flex items-center my-4">
      {breadcrumbItems.map((item, index) => {
        const linkStyle = item.active ? "text-gray-900 text-sm" : "text-gray-500 hover:text-green-300 text-sm";
        return Number(index + 1) % 2 === 0 ? (
          <li className="flex items-center" key={index}>
            <AiOutlineMinus className="mx-2 font-bold gray-manatee" />
            <Link href={item.link} passHref>
              <a title={item.name} className={linkStyle}>
                {item.name}
              </a>
            </Link>
            <AiOutlineMinus className="mx-2 font-bold gray-manatee" />
          </li>
        ) : (
          <li key={index}>
            <Link href={item.link} passHref>
              <a title={item.name} className={linkStyle}>
                {item.name}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

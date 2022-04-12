import Link from "next/link";
import { AiOutlineMinus } from "react-icons/ai";

interface Props {
  breadcrumbItem: string;
}

export default function ProductBreadcrumb({ breadcrumbItem }: Props) {
  const breadcrumbItems = [
    { name: "Homepage", link: "/" },
    { name: "All", link: "/products" },
    { name: breadcrumbItem, link: "/products" },
  ];
  return (
    <ul className="flex items-center my-4">
      {breadcrumbItems.map((item, index) => {
        return Number(index + 1) % 2 === 0 ? (
          <li className="flex items-center" key={index}>
            <AiOutlineMinus className="mx-2 gray-lavender" />
            <Link href={item.link} passHref>
              <a>{item.name}</a>
            </Link>
            <AiOutlineMinus className="mx-2 gray-lavender" />
          </li>
        ) : (
          <li key={index}>
            <Link href={item.link} passHref>
              <a>{item.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

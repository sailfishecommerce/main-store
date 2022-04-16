import Link from "next/link";
import { AiOutlineMinus } from "react-icons/ai";

interface Props {
  breadcrumbItems: Array<{
    name: string;
    link: string | null;
    active?: boolean;
  }>;
}

function BreadCrumbItem({ item }: any) {
  const linkStyle = item.active
    ? "text-gray-900 text-sm"
    : "text-gray-500 hover:text-green-300 text-sm";
  return (
    <>
      {item.link ? (
        <Link href={item.link} passHref>
          <a title={item.name} className={linkStyle}>
            {item.name}
          </a>
        </Link>
      ) : (
        <a title={item.name} className={linkStyle}>
          {item.name}
        </a>
      )}
    </>
  );
}

export default function Breadcrumb({ breadcrumbItems }: Props) {
  return (
    <ul className="flex items-center my-4">
      {breadcrumbItems.map((item, index) => {
        return Number(index + 1) % 2 === 0 ? (
          <li className="flex items-center" key={index}>
            <AiOutlineMinus className="mx-2 font-bold gray-manatee" />
            <BreadCrumbItem item={item} />
            <AiOutlineMinus className="mx-2 font-bold gray-manatee" />
          </li>
        ) : (
          <li key={index}>
            <BreadCrumbItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

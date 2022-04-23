import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  menuItem: {
    slug: string;
    name: string;
  };
  className?: string;
  link?: string;
}

export default function PageLink({ menuItem, className, link }: Props) {
  const router = useRouter();
  const linkClassName = className
    ? className
    : "font-semibold text-sm md:text-lg md:font-light";
  const activeLinkStyle =
    router.query.slug?.includes(menuItem.slug) ||
    router.route.includes(menuItem.slug)
      ? "mountain-green"
      : "";
  const pageLink = link ? `/${link}/${menuItem.slug}` : menuItem.slug;
  return (
    <li className="md:mx-2 mx-0 mr-4" key={menuItem.slug}>
      <Link href={pageLink} passHref>
        <a
          title={menuItem.name}
          className={`${activeLinkStyle} hover:text-green-500 ${linkClassName} `}
        >
          {menuItem.name}
        </a>
      </Link>
    </li>
  );
}

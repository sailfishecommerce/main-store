import Link from "next/link";

interface Props {
  menuItem: {
    link: string;
    text: string;
  };
}

export default function PageLink({ menuItem }: Props) {
  return (
    <li className="mx-2" key={menuItem.link}>
      <Link href={menuItem.link} passHref>
        <a
          title={menuItem.text}
          className="hover:text-green-500 font-bold text-xs md:text-lg md:font-light"
        >
          {menuItem.text}
        </a>
      </Link>
    </li>
  );
}

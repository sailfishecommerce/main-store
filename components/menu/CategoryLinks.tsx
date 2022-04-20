import Link from "next/link";

interface Props {
  title: string;
  linkArray: Array<{ link?: string; title: string }>;
}

export default function CategoryLinks({ title, linkArray }: Props) {
  return (
    <div className="categoryLinks mt-4 md:mt-0">
      <h1 className="text-lg font-bold md:hidden">{title}</h1>
      <ul className="category-list border-r md:mr-8 md:w-full">
        {linkArray.map((item) => {
          return item.link ? (
            <li
              key={item.link}
              className="sidebar-list py-1 md:p-2 my-1 md:my-2 w-full"
            >
              <Link href={item.link} passHref>
                <a className="text-black">{item.title}</a>
              </Link>
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
}

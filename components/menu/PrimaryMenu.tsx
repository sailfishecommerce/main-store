import Link from "next/link";

import Logo from "@/components/logo";
import menuLinks from "@/json/menu.json";

export default function PrimaryMenu() {
  return (
    <div className="flex justify-between items-center my-2 py-4 ">
      <Logo className="w-1/12" />
      <div>
        <span className="font-bold text-green-500 mr-1">Whatsapp:</span>
        9449 2060
      </div>
      <ul className="flex items-center justify-between w-1/4">
        {menuLinks.primaryMenu.map((menuItem) => (
          <li key={menuItem.link}>
            <Link href={menuItem.link} passHref>
              <a>{menuItem.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

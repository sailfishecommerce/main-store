import Link from "next/link";
import Image from 'next/image'

import {IoPersonOutline, IoCartOutline} from 'react-icons/io5'

import Logo from "@/components/logo";
import menuLinks from "@/json/menu.json";

export default function PrimaryMenu() {
  return (
    <div className="flex justify-between items-center my-2 py-4 ">
      <Logo className="w-44" />
      <div className="flex items-center">
      <Image src="/whatsappIcon.png" alt="cart" title="contact us on whatsapp" height={25} width={25} />
        <span className="font-bold text-green-500 mx-1">Whatsapp:</span>
        9449 2060
      </div>
      <ul className="flex items-center justify-between w-1/4">
        {menuLinks.primaryMenu.map((menuItem) => (
          <li key={menuItem.link}>
            <Link href={menuItem.link} passHref>
              <a title={menuItem.text} className="hover:text-red-500 font-light">{menuItem.text}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="icons flex items-center justify-between w-16">
        <div className="cart-icon relative">
        <Image src="/cartIcon.png" alt="cart" title="cart" height={25} width={25} />
        <div className="bg-yellow-500 rounded-full flex items-center text-white justify-center -mt-8 text-xs ml-2 z-5 absolute h-4 w-4">2</div>
        </div>
        <IoPersonOutline className="hover:text-red-500" size={20} />
      </div>
    </div>
  );
}
 
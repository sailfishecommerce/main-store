import footerLinks from "@/json/footer.json";
import Link from "next/link";

export default function FooterLink() {
  return (
    <div className="pl-12 flex items-start justify-around grid grid-cols-2 w-2/4">
      {footerLinks.map((footerLink) => (
        <ul className="mt-4" key={footerLink.text}>
          <span className="flex items-center mb-6">
            <h4 className="font-bold text-xl">{footerLink.text}</h4>
            {footerLink.tag && (
              <div className="py-1 px-2 border mx-2 text-sm border-gray-500 text-gray-500 rounded-full hover:border-green-500 hover:text-green-500 hover:font-bold">
                {footerLink.tag}
              </div>
            )}
          </span>
          {footerLink.links.map((link) => (
            <li className="my-2" key={link.link}>
              <Link href={link.link} passHref>
                <a className="hover:text-green-500" title={link.text}>
                  {link.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

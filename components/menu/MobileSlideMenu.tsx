import menu from "@/json/menu.json";
import PageLink from "@/components/menu/PageLink";
import Whatsapp from "@/public/svg/Whatsapp";
import TrendingLinks from "@/components/menu/TrendingLinks";
import SectionLinks from "@/components/menu/SectionLinks";
import CategoryLinks from "@/components/menu/CategoryLinks";

export default function MobileSlideMenu() {
  return (
    <>
      <div className="mobileslidemenu flex flex-col">
        <ul className="flex items-center my-4">
          {menu.primaryMenu.map((item, index) => (
            <PageLink menuItem={item} key={index} />
          ))}
        </ul>
        <div className="reach-us w-full border rounded-md p-4 mb-4">
          <div className="flex items-center">
            <Whatsapp />
            <span className="font-medium ml-4">Call us: 9442 2060</span>
          </div>
          <hr className="w-full border-b border-gray-200 my-4" />
          <p>Opening Hours: Mon - Sat: 9:00 am - 6:00 pm</p>
        </div>
        <hr className="w-full border-b border-gray-200 mb-8" />
        <TrendingLinks mobile />
        <CategoryLinks />
        <SectionLinks />
      </div>
      <style jsx>
        {`
          .mobileslidemenu {
            height: 100vh;
          }
        `}
      </style>
    </>
  );
}

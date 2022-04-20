import Link from "next/link";
import Image from "next/image";

import allCategoryContent from "@/json/allcategories-dropdown.json";
import TrendingLinkSlider from "@/components/slider/TrendingLinkSlider";

interface TrendLinkProps {
  trendingItem: {
    link: string;
    name: string;
    image: string;
  };
}

export const TrendLink = ({ trendingItem }: TrendLinkProps) => (
  <li title={trendingItem.name} className="trending-item">
    <Link href={trendingItem.link} passHref>
      <a className="trending">
        <Image
          src={trendingItem.image}
          height={120}
          width={180}
          className="hover:scale-105"
          alt={trendingItem.name}
        />
        <p className="text-center font-light">{trendingItem.name}</p>
      </a>
    </Link>
  </li>
);

interface TrendingLinksProps {
  mobile: boolean;
}

export default function TrendingLinks({ mobile }: TrendingLinksProps) {
  return (
    <>
      {mobile ? (
        <TrendingLinkSlider />
      ) : (
        <ul className="trendings flex items-center justify-between w-full">
          {allCategoryContent.main.trending.map((trendingItem, index) => (
            <TrendLink trendingItem={trendingItem} key={index} />
          ))}
        </ul>
      )}
    </>
  );
}

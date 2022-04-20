import { useState } from "react";

import { useMediaQuery } from "@/hooks";
import Noticebar from "@/components/alerts/Noticebar";
import Menu from "@/components/menu";
import useNavStyle from "@/hooks/useNavStyle";
import useNav from "@/hooks/useNav";
import dynamic from "next/dynamic";

const DynamicMobileSlideMenu = dynamic(
  () => import("@/components/menu/MobileSlideMenu")
);
export default function Header() {
  const [showNoticebar, setShowNoticebar] = useState(true);
  const toggleNoticebar = () => setShowNoticebar(!showNoticebar);
  const { navStyle } = useNavStyle();
  const { mobileMenu } = useNav();

  const mobileWidth = useMediaQuery("(max-width:768px)");
  const displayShadow = mobileWidth ? "header" : "";
  return (
    <header
      className={`${navStyle} ${displayShadow} bg-white w-full pb-0  md:pb-2`}
    >
      {showNoticebar && <Noticebar toggleBarVisibility={toggleNoticebar} />}
      <Menu />
      {mobileWidth && mobileMenu && <DynamicMobileSlideMenu />}
    </header>
  );
}

import { useState } from "react";

import { useMediaQuery } from "@/hooks";
import Noticebar from "@/components/alerts/Noticebar";
import Menu from "@/components/menu";
import useNavStyle from "@/hooks/useNavStyle";

export default function Header() {
  const [showNoticebar, setShowNoticebar] = useState(true);
  const toggleNoticebar = () => setShowNoticebar(!showNoticebar);
  const { navStyle } = useNavStyle();

  const mobileWidth = useMediaQuery("(max-width:768px)");
  const displayShadow = mobileWidth ? "shadow-xl" : "";
  return (
    <header
      className={`${navStyle} ${displayShadow} bg-white w-full pb-0  md:pb-2`}
    >
      {showNoticebar && <Noticebar toggleBarVisibility={toggleNoticebar} />}
      <Menu />
    </header>
  );
}

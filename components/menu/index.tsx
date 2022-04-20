import dynamic from "next/dynamic";

import PrimaryMenu from "@/components/menu/PrimaryMenu";
import SecondaryMenu from "@/components/menu/SecondaryMenu";
import { useMediaQuery } from "@/hooks";
import useNav from "@/hooks/useNav";
import Container from "@/layouts/Container";
import MobileSearchbar from "@/components/search/MobileSearchbar";

const DynamicMobileSlideMenu = dynamic(
  () => import("@/components/menu/MobileSlideMenu")
);

export default function Menu() {
  const mobileWidth = useMediaQuery("(max-width:768px)");
  const { showMobileSearch, mobileMenu } = useNav();

  return (
    <nav className="md:px-0 px-4 pb-3 md:pb-0">
      <Container>
        <PrimaryMenu />
        {!mobileWidth && <SecondaryMenu />}
        {mobileWidth && showMobileSearch && <MobileSearchbar />}
        {mobileWidth && mobileMenu && <DynamicMobileSlideMenu />}
      </Container>
    </nav>
  );
}

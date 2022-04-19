import PrimaryMenu from "@/components/menu/PrimaryMenu";
import SecondaryMenu from "@/components/menu/SecondaryMenu";
import { useMediaQuery } from "@/hooks";
import useNav from "@/hooks/useNav";
import Container from "@/layouts/Container";
import MobileSearchbar from "../search/MobileSearchbar";

export default function Menu() {
  const mobileWidth = useMediaQuery("(max-width:768px)");
  const { showMobileSearch } = useNav();
  console.log("showMobileSearch", showMobileSearch);
  return (
    <nav className="md:px-0 px-4 pb-3 md:pb-0">
      <Container>
        <PrimaryMenu />
        {!mobileWidth && <SecondaryMenu />}
        {mobileWidth && showMobileSearch && <MobileSearchbar />}
      </Container>
    </nav>
  );
}

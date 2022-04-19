import PrimaryMenu from "@/components/menu/PrimaryMenu";
import SecondaryMenu from "@/components/menu/SecondaryMenu";
import { useMediaQuery } from "@/hooks";
import Container from "@/layouts/Container";

export default function Menu() {
  const mobileWidth = useMediaQuery("(max-width:768px)");
  return (
    <nav className="md:px-0 px-4">
      <Container>
        <PrimaryMenu />
        {!mobileWidth && <SecondaryMenu />}
      </Container>
    </nav>
  );
}

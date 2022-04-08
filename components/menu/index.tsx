import PrimaryMenu from "@/components/menu/PrimaryMenu";
import SecondaryMenu from "@/components/menu/SecondaryMenu";
import Container from "@/layouts/Container";

export default function index() {
  return (
    <nav>
      <Container>
        <PrimaryMenu />
        <SecondaryMenu />
      </Container>
    </nav>
  );
}

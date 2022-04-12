import useScroll from "@/hooks/useScroll";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function useNavStyle() {
  const tabWidth = useMediaQuery("(max-width:768px)");
  const scrollGap = tabWidth ? 200 : 350;
  const { scroll } = useScroll();
  const scrollUp = Number(scroll) > scrollGap ? true : false;
  const navStyle = scrollUp ? "fixed top-0 z-50 shadow-lg border-b" : "";

  return { navStyle, scrollUp };
}

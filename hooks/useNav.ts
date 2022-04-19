import { updateSearchView } from "@/redux/ui-slice";
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";

export default function useNav() {
  const dispatch = useAppDispatch();
  const toggleSearch = () => dispatch(updateSearchView());
  const { mobileMenu, showMobileSearch } = useAppSelector((state) => state.UI);

  console.log("showMobileSearch", showMobileSearch);

  return {
    toggleSearch,
    mobileMenu,
    showMobileSearch,
  };
}

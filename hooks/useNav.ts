import { updateSearchView, updateMobileMenu } from "@/redux/ui-slice";
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";

export default function useNav() {
  const dispatch = useAppDispatch();
  const { mobileMenu, showMobileSearch } = useAppSelector((state) => state.UI);
  const toggleSearch = () => dispatch(updateSearchView());
  const toggleMobileMenu = () => dispatch(updateMobileMenu());

  return {
    toggleSearch,
    toggleMobileMenu,
    mobileMenu,
    showMobileSearch,
  };
}

import { toggleSlideTab } from "@/redux/ui-slice";
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";

export default function useSlidingTab() {
  const dispatch = useAppDispatch();
  const { slideTab } = useAppSelector((state) => state.UI);

  const updateSlideTab = (
    slideTabState: "SLIDING-CART" | "SLIDING-INFO" | "SLIDING-ACCOUNT" | null
  ) => dispatch(toggleSlideTab(slideTabState));

  return {
    updateSlideTab,
    slideTab,
  };
}

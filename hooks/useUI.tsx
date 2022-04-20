import { useAppSelector } from "@/hooks/useRedux";
import { useAppDispatch } from "@/redux/store";
import { updateCategoryDropdown } from "@/redux/ui-slice";

export default function useUI() {
  const { categoryDropdown } = useAppSelector((state) => state.UI);
  const dispatch = useAppDispatch();

  function toggleCategoriesDropdown() {
    return dispatch(updateCategoryDropdown());
  }

  return {
    categoryDropdown,
    toggleCategoriesDropdown,
  };
}

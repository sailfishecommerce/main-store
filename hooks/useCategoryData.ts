import { useQuery } from "react-query";

import useCategory from "@/hooks/useCategory";
import categoryPlaceholderData from "@/json/category-placeholder-data.json";

export default function useCategoryData() {
  const { listAllCategory } = useCategory();
  const { data, status } = useQuery("listAllCategory", listAllCategory, {
    placeholderData: { results: categoryPlaceholderData },
  });
  return [data, status];
}

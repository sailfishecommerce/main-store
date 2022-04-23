import axios from "axios";

import useAllProducts from "./useAllProducts";
import useCategoryData from "@/hooks/useCategoryData";

export default function useAlgoliaIndex() {
  const [data, status] = useAllProducts();
  const [categoryData, categoryStatus] = useCategoryData();

  function addProductToAlgoliaIndex() {
    axios
      .post("/api/add-products-to-algolia-index", data?.results)
      .then((response) => {
        console.log("response addProductToAlgoliaIndex", response);
      })
      .catch((error) => console.error("error addProductToAlgoliaIndex", error));
  }

  function addCategoriesToAlgoliaIndex() {
    axios
      .post("/api/add-products-to-algolia-index", categoryData?.results)
      .then((response) => {
        console.log("response addProductToAlgoliaIndex", response);
      })
      .catch((error) => console.error("error addProductToAlgoliaIndex", error));
  }

  return {
    addProductToAlgoliaIndex,
    status,
    addCategoriesToAlgoliaIndex,
  };
}

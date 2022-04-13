import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productSpec: "",
    product: null,
    productOption: [],
    isRequiredOptionsSelected: null,
    activeProduct: null,
    viewProductInfoVisibility: false,
  },
  reducers: {
    updateProduct(state, action: PayloadAction<any>) {
      state.productSpec = action.payload;
    },
    addProduct(state, action: PayloadAction<any>) {
      state.product = action.payload;
    },
    updateProductOption(state, action) {
      state.productOption = action.payload;
    },
    updateRequiredOption(state, action) {
      state.isRequiredOptionsSelected = action.payload;
    },
    updateActiveProduct(state, action) {
      state.activeProduct = action.payload;
    },
    updateProductInfoVisibility(state, action) {
      state.viewProductInfoVisibility = action.payload
    },
  },
});

export const {
  updateProduct,
  addProduct,
  updateProductOption,
  updateRequiredOption,
  updateActiveProduct,
  updateProductInfoVisibility,
} = productSlice.actions;
export default productSlice.reducer;

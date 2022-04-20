import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "UI",
  initialState: {
    slideTab: null,
    sidebarRight: false,
    loading: false,
    mobileMenu: false,
    modal: false,
    showNav: false,
    showMobileSearch: false,
    authModal: "AUTHFORM",
    displayModal: {
      active: false,
      type: null,
      data: null,
    },
    checkoutModal: "SECURE_CHECKOUT",
    displayCheckoutModal: false,
    displayAuthModal: false,
    quickViewModal: {
      active: false,
      productToView: null,
    },
  },
  reducers: {
    toggleSlideTab(state, action) {
      state.slideTab = action.payload;
    },
    updateSearchView(state) {
      if (!state.mobileMenu) {
        state.showMobileSearch = !state.showMobileSearch;
      }
    },
    toggleSidebarRight(state) {
      state.sidebarRight = !state.sidebarRight;
    },
    toggleModal(state) {
      state.modal = !state.modal;
    },
    authModalForm(state, action: PayloadAction<string>) {
      state.authModal = action.payload;
    },
    checkoutModal(state, action: PayloadAction<string>) {
      state.checkoutModal = action.payload;
    },
    displayCheckoutModalAction(state) {
      state.displayCheckoutModal = !state.displayCheckoutModal;
    },
    updateLoadingAction(state) {
      state.loading = !state.loading;
    },
    quickViewModal(state, action) {
      state.quickViewModal.active = !state.quickViewModal.active;
      state.quickViewModal.productToView = action.payload;
    },
    toggleAuthModal(state) {
      state.displayAuthModal = !state.displayAuthModal;
    },
    updateMobileMenu(state) {
      state.mobileMenu = !state.mobileMenu;
    },
    toggleNav(state) {
      state.showNav = !state.showNav;
    },
    toggleAppModal(state, action) {
      state.displayModal.type = action.payload.type;
      if (state.displayModal.type) {
        state.displayModal.active = true;
      } else {
        state.displayModal.active = false;
      }
      if (action.payload.data) {
        state.displayModal.data = action.payload?.data;
      }
    },
  },
});

export const {
  toggleNav,
  toggleSlideTab,
  toggleSidebarRight,
  toggleModal,
  authModalForm,
  updateLoadingAction,
  quickViewModal,
  updateSearchView,
  toggleAuthModal,
  toggleAppModal,
  checkoutModal,
  updateMobileMenu,
  displayCheckoutModalAction,
} = uiSlice.actions;

export default uiSlice.reducer;

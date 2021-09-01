import { createSlice } from '@reduxjs/toolkit';

const initialUIState = {
  modalOpen: false,
  menuOpen: false,
  //mobileMenu: false
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    openModal(state) {
      state.modalOpen = true;
    },
    closeModal(state) {
      state.modalOpen = false;
    },
    // setMenuType(state) {
    //   const vw = Math.max(
    //     document.documentElement.clientWidth || 0,
    //     window.innerWidth || 0
    //   );
    //   state.mobileMenu = vw <= 767 ? true : false;
    // },
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export default uiSlice.reducer;
export const {
  openModal,
  closeModal,
  //setMenuType,
  toggleMenu,
} = uiSlice.actions;

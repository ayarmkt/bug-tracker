import { createSlice } from '@reduxjs/toolkit';

const initialUIState = {
  modalOpen: false,
  menuOpen: false,
  notification: { status: '', title: '', message: '' },
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
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default uiSlice.reducer;
export const {
  openModal,
  closeModal,
  toggleMenu,
  showNotification,
} = uiSlice.actions;

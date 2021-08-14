import { createSlice } from '@reduxjs/toolkit';

const initialUIState = { modalOpen: false };

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
  },
});

export default uiSlice.reducer;
export const { openModal, closeModal } = uiSlice.actions;

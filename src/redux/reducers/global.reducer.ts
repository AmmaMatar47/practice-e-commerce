import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isToastOpen: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    loading(state) {
      state.isLoading = true;
    },
    loadingFinished(state) {
      state.isLoading = false;
    },
    openToast(state) {
      state.isToastOpen = true;
    },
    closeToast(state) {
      state.isToastOpen = false;
    },
  },
});

export const { loading, loadingFinished, openToast, closeToast } = globalSlice.actions;

export default globalSlice.reducer;

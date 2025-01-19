import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData, ProductType } from '../../services/apiFetchData';

export const fetchProducts = createAsyncThunk('product/loadProducts', async (params: string) =>
  fetchData(params)
);

export interface ProductsState {
  products: [] | ProductType[];
  status: 'idle' | 'pending' | 'failed' | 'succeeded';
  error: null;
}

const initialState: ProductsState = {
  products: [],
  status: 'idle',
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'pending';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, state => {
        state.status = 'failed';
      });
  },
});

export default productSlice.reducer;

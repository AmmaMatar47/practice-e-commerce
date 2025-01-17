import { configureStore } from '@reduxjs/toolkit';
import productReducer from './components/CardList/productSlice';

const store = configureStore({ reducer: { product: productReducer } });

export default store;

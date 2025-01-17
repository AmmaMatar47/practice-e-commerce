import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productReducer from './components/CardList/productSlice';

const rootReducer = combineReducers({ products: productReducer });
const store = configureStore({ reducer: rootReducer });

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default store;

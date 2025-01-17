import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './product.reducer';

export const rootReducer = combineReducers({ products: productReducer });

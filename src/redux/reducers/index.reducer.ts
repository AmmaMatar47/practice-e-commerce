import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './product.reducer';
import userReducer from './user.reducer';

export const rootReducer = combineReducers({ products: productReducer, user: userReducer });

import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user.reducer';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import globalReducer from './global.reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const rootReducer = combineReducers({ user: persistedUserReducer, global: globalReducer });

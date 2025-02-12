import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/index.reducer';
import { persistStore } from 'redux-persist';

const store = configureStore({ reducer: rootReducer });
export const persistedStore = persistStore(store);

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default store;

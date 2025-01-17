import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/index.reducer';

const store = configureStore({ reducer: rootReducer });

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default store;

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/assets/styles/index.scss';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store, { persistedStore } from './redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);

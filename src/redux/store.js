import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsApi } from './auth/authSlice';
import { addLoginSlice } from './loginSlice';

const persistConfig = {
  key: 'token',
  version: 1,
  storage,
  blacklist: [contactsApi.reducerPath],
};

const reducers = combineReducers({
  user: addLoginSlice,
  [contactsApi.reducerPath]: contactsApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
});

export let persistor = persistStore(store);

setupListeners(store.dispatch);

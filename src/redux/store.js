import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './camper/slice';
import { filterReducer } from './filter/slice';
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
import storage from 'redux-persist/lib/storage';
import { favoriteReducer } from './favorite/slice';

const favoritePersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    filter: filterReducer,
    favorites: persistReducer(favoritePersistConfig, favoriteReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };

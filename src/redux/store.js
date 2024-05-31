import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "./Slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const basketConfig = {
  key: "basket",
  storage,
  whitelist: ["basket"],
};

export const store = configureStore({
  reducer: {
    basket: persistReducer(basketConfig, basketReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

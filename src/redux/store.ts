import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { PersistConfig } from "redux-persist/lib/types";
import storage from "redux-persist/lib/storage";

import authReducer, { AuthState } from "./slices/auth";
import MovieOrder, { MovieOrderState } from "./slices/MovieOrder";

const authPersistConfig: PersistConfig<AuthState> = {
  key: "auth:tickitz",
  storage,
  whitelist: ["token", "user"],
};

const OrderPersistConfig: PersistConfig<MovieOrderState> = {
  key: "order:tickitz",
  storage,
  whitelist: ["movie", "cinema", "payment", "seats"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedOrderReducer = persistReducer(OrderPersistConfig, MovieOrder);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    order: persistedOrderReducer,
  },
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

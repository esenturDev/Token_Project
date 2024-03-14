import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./api/usersApi";
import { loginApi } from "./api/loginApi";
import { productApi } from "./api/productApi";
export const store = configureStore({
	reducer: {
		[usersApi.reducerPath]: usersApi.reducer,
		[loginApi.reducerPath]: loginApi.reducer,
		[productApi.reducerPath]: productApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(usersApi.middleware, loginApi.middleware, productApi.middleware),
});

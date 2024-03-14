import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Products } from "./types";

// interface CreateUserRequest {
//   id?: number;
//   email: string;
//   password: string;
//   userName: string;
// }

export const productApi = createApi({
	reducerPath: "productsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://brand-store.up.railway.app" }),
	tagTypes: ["productsGet"],
	endpoints: (builder) => {
		return {
			getProducts: builder.query<
				Products.GetProductsResponse,
				Products.GetProductsRequest
			>({
				query: () => ({
					url: "products",
					headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
				}),
				providesTags: ["productsGet"],
			}),
			postProducts: builder.mutation<
				Products.PostProductsResponse,
				Products.PostProductsRequest
			>({
				query: ({ productName, price, quantity, photoUrl }) => ({
					url: "products",
					method: "POST",
					body: { productName, price, quantity, photoUrl },
					headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
				}),
				invalidatesTags: ["productsGet"],
			}),
			// createUser: builder.mutation<CreateUserResponse, CreateUserRequest>({
			//   query: ({email, password, userName}) => ({
			//     url: 'users',
			//     method: 'POST',
			//     body: {email, password, userName},
			//   })
			// })
		};
	},
});

export const { useGetProductsQuery, usePostProductsMutation } = productApi;

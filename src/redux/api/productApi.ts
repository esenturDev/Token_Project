import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Products {
	id?: number;
	name: string;
	photoUrl: string;
	price: string;
	quantity: string;
}

// interface CreateUserRequest {
//   id?: number;
//   email: string;
//   password: string;
//   userName: string;
// }

export const productApi = createApi({
	reducerPath: "productsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://brand-store.up.railway.app" }),
	endpoints: (builder) => {
		return {
			getProducts: builder.query<Products[], void>({
				query: () => ({
					url: "products",
					headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
				}),
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

export const { useGetProductsQuery } = productApi;

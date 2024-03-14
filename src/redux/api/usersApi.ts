import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Users {
  id: number;
  email: string;
}

interface CreateUserResponse {
  id?: number;
  email: string;
  password: string;
  userName: string;
}

interface CreateUserRequest {
  id?: number;
  email: string;
  password: string;
  userName: string;
}

export  const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({baseUrl: "https://brand-store.up.railway.app"}),
  endpoints: (builder) => {
    return {
      getUsers: builder.query<Users[], void>({
        query: () => "users",
      }),
      createUser: builder.mutation<CreateUserResponse, CreateUserRequest>({
        query: ({email, password, userName}) => ({
          url: 'users',
          method: 'POST',
          body: {email, password, userName},
        })
      })
    }
  }
})

export const {useGetUsersQuery, useCreateUserMutation} =  usersApi
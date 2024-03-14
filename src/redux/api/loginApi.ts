import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export  const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({baseUrl: "https://brand-store.up.railway.app"}),
  endpoints: (builder) => {
    return {
      login: builder.mutation<LoginResponse, LoginRequest>({
        query: ({email, password}) => ({
          url: 'login',
          method: 'POST',
          body: {email, password},
        })
      })
    }
  }
})

export const { useLoginMutation} =  loginApi
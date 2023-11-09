import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface user {
  id: number;
  name: string;
  username: string;
  email: string;
  //   address: {
  //     street: "Kulas Light";
  //     suite: "Apt. 556";
  //     city: "Gwenborough";
  //     zipcode: "92998-3874";
  //     geo: {
  //       lat: "-37.3159";
  //       lng: "81.1496";
  //     };
  //   };
  phone: string;
  website: string;
  //   company: {
  //     name: "Romaguera-Crona";
  //     catchPhrase: "Multi-layered client-server neural-net";
  //     bs: "harness real-time e-markets";
  //   };
}

export const userApi = createApi({
  reducerPath: "users", // oklart
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<user[], undefined>({
      query: () => "users",
    }),
  }),
});

export const { useGetUsersQuery } = userApi;

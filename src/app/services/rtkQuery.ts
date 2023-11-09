import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface user {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export const userApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<user[], undefined>({
      query: () => 'users',
    }),
  }),
});

export const { useGetUsersQuery } = userApi;

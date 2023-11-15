import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface user {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export const externalUserApi = createApi({
  reducerPath: 'externalUsers',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getExternalUsers: builder.query<user[], undefined>({
      query: () => 'users',
    }),
  }),
});

export const { useGetExternalUsersQuery } = externalUserApi;

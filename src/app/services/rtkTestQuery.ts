import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface testUser {
  id: number;
  name: string;
}

export const getTestApi = createApi({
  reducerPath: 'test',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),
  endpoints: (builder) => ({
    getTestUsers: builder.query<testUser[], undefined>({
      query: () => 'test',
    }),
    postTestUsers: builder.mutation<testUser[], undefined>({
      query: () => 'test',
    }),
  }),
});

export const { useGetTestUsersQuery } = getTestApi;

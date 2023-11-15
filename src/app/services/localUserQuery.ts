import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface testUser {
  id: number;
  name: string;
}

export const localUserApi = createApi({
  reducerPath: 'localUsers',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),
  endpoints: (builder) => ({
    getLocalUsers: builder.query<testUser[], undefined>({
      query: () => 'test',
    }),
    postLocalUsers: builder.mutation<testUser[], undefined>({
      query: () => 'test',
    }),
  }),
});

export const { useGetLocalUsersQuery, usePostLocalUsersMutation } =
  localUserApi;

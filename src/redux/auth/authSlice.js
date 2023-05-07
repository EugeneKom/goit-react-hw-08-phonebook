import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',

  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.token;

    if (token) {
      headers.set(`Authorization`, `Bearer ${token}`);
    }
    return headers;
  },
});

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery,
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    createNewUser: builder.mutation({
      query: userData => {
        return {
          url: '/users/signup',
          method: 'POST',
          body: userData,
        };
      },
      invalidatesTags: ['Contacts'],
    }),
    loginUser: builder.mutation({
      query: userData => {
        return { url: '/users/login', method: 'POST', body: userData };
      },
      invalidatesTags: ['Contacts'],
    }),
    logoutUser: builder.mutation({
      query: () => {
        return {
          url: '/users/logout',
          method: 'POST',
        };
      },
    }),
    getCurrentUser: builder.query({
      query: () => {
        return {
          url: '/users/current',
        };
      },
      providesTags: ['Contacts'],
    }),
    getContacts: builder.query({
      query: () => {
        return {
          url: '/contacts',
        };
      },
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }],
    }),
    createNewContact: builder.mutation({
      query: contact => {
        return {
          url: '/contacts',
          method: 'POST',
          body: contact,
        };
      },
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => {
        return {
          url: `/contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Contacts'],
    }),
    modifyContact: builder.mutation({
      query: ({ id, name, number }) => {
        return {
          url: `/contacts/${id}`,
          method: 'PATCH',
          body: { name, number },
        };
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useCreateNewUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetCurrentUserQuery,
  useCreateNewContactMutation,
  useGetContactsQuery,
  useDeleteContactMutation,
  useModifyContactMutation,
} = contactsApi;

import { api } from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    fetchOne: build.query({
      query: data => ({
        url: `/login_user`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
  overrideExisting: false,
});
export const { useLazyFetchOneQuery } = userApi;

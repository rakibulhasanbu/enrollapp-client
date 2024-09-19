import { METHOD } from "@/redux/api/tagTypesList";
import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (filterOptions) => ({
        url: `/auth/users${filterOptions ? `?${filterOptions}` : ""}`,
        method: METHOD.GET,
      }),
    }),
    getOverView: builder.query({
      query: () => ({
        url: `/auth/overview`,
        method: METHOD.GET,
      }),
    }),
    getOrganizerOverView: builder.query({
      query: () => ({
        url: `/auth/organizer-overview`,
        method: METHOD.GET,
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetOverViewQuery,
  useGetOrganizerOverViewQuery,
} = userApi;

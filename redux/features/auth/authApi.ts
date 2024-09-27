import { METHOD } from "@/redux/api/tagTypesList";
import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    organizerRegister: builder.mutation({
      query: (userInfo) => ({
        url: "/organizer-register",
        method: METHOD.POST,
        body: userInfo,
      }),
    }),
    googleAuthRegister: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/google-auth",
        method: METHOD.POST,
        body: userInfo,
      }),
    }),
    organizerLogin: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/organizer-login",
        method: METHOD.POST,
        body: userInfo,
      }),
    }),
    getProfile: builder.query({
      query: () => ({
        url: `/profile`,
        method: METHOD.GET,
      }),
    }),
  }),
});

export const {
  useOrganizerLoginMutation,
  useOrganizerRegisterMutation,
  useGoogleAuthRegisterMutation,
  useGetProfileQuery,
} = authApi;

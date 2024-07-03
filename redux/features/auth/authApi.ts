import { METHOD } from "@/redux/api/tagTypesList";
import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    organizerRegister: builder.mutation({
      query: (userInfo) => ({
        url: "/organizer-register",
        method: "POST",
        body: userInfo,
      }),
    }),

    organizerLogin: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/organizer-login",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useOrganizerLoginMutation, useOrganizerRegisterMutation } =
  authApi;

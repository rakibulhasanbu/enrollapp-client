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

    login: builder.mutation({
      query: (userInfo) => ({
        url: "/login",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation, useOrganizerRegisterMutation } = authApi;

import { baseApi } from "../../api/baseApi";
import { METHOD } from "../../api/tagTypesList";

const OrganizerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrganizerById: builder.query({
      query: (id) => ({
        url: `/organizer/${id}`,
        method: METHOD.GET,
      }),
    }),
  }),
});

export const { useGetOrganizerByIdQuery } = OrganizerApi;

import { baseApi } from "../../api/baseApi";
import { METHOD, tagTypes } from "../../api/tagTypesList";

const OrganizerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrganizerById: builder.query({
      query: (id) => ({
        url: `/organizer/${id}`,
        method: METHOD.GET,
      }),
      providesTags: [tagTypes.organizer],
    }),
    getOrganizerEventsById: builder.query({
      query: (id) => ({
        url: `/events/${id}`,
        method: METHOD.GET,
      }),
      providesTags: [tagTypes.organizer, tagTypes.event],
    }),
    upadteOrganizerById: builder.mutation({
      query: ({ id, organizerData }) => ({
        url: `/organizer/${id}`,
        method: METHOD.PUT,
        body: organizerData,
      }),
      invalidatesTags: [tagTypes.organizer],
    }),
  }),
});

export const {
  useGetOrganizerByIdQuery,
  useGetOrganizerEventsByIdQuery,
  useUpadteOrganizerByIdMutation,
} = OrganizerApi;

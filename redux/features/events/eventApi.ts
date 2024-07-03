import { baseApi } from "../../api/baseApi";
import { METHOD, tagTypes } from "../../api/tagTypesList";

const EventApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: (filterOptions) => ({
        url: `/events${filterOptions ? `?${filterOptions}` : ""}`,
        method: METHOD.GET,
      }),
      providesTags: [tagTypes.event],
    }),

    getMyEvents: builder.query({
      query: () => ({
        url: `/my-events`,
        method: METHOD.GET,
      }),
      providesTags: [tagTypes.event],
    }),

    getEventById: builder.query({
      query: (id) => ({
        url: `/event/${id}`,
        method: METHOD.GET,
      }),
    }),

    addEvent: builder.mutation({
      query: (EventData) => ({
        url: "/event",
        method: METHOD.POST,
        body: EventData,
      }),
      invalidatesTags: [tagTypes.event],
    }),

    updatedEvent: builder.mutation({
      query: (updatedData) => ({
        url: `/event/${updatedData.id}`,
        method: METHOD.PUT,
        body: updatedData.EventData,
      }),
      invalidatesTags: [tagTypes.event],
    }),

    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `/event/${id}`,
        method: METHOD.DELETE,
      }),
      invalidatesTags: [tagTypes.event],
    }),
  }),
});

export const {
  useGetEventsQuery,
  useGetMyEventsQuery,
  useGetEventByIdQuery,
  useAddEventMutation,
  useUpdatedEventMutation,
  useDeleteEventMutation,
} = EventApi;

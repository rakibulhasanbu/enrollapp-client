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

    getEventById: builder.query({
      query: (id) => ({
        url: `/event/${id}`,
        method: METHOD.GET,
      }),
    }),

    createEvent: builder.mutation({
      query: (eventData) => ({
        url: "/event",
        method: METHOD.POST,
        body: eventData,
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
  useCreateEventMutation,
  useGetEventsQuery,
  useGetEventByIdQuery,
  useUpdatedEventMutation,
  useDeleteEventMutation,
} = EventApi;

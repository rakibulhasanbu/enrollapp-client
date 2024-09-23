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
    getAdminEvents: builder.query({
      query: (filterOptions) => ({
        url: `/admin-events${filterOptions ? `?${filterOptions}` : ""}`,
        method: METHOD.GET,
      }),
      providesTags: [tagTypes.event],
    }),
    getMyEvents: builder.query({
      query: (filterOptions) => ({
        url: `/my-events${filterOptions ? `?${filterOptions}` : ""}`,
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

    createForm: builder.mutation({
      query: (eventData) => ({
        url: "/form",
        method: METHOD.POST,
        body: eventData,
      }),
      invalidatesTags: [tagTypes.event],
    }),

    updatedEvent: builder.mutation({
      query: (updatedData) => ({
        url: `/event/${updatedData.id}`,
        method: METHOD.PATCH,
        body: updatedData.eventData,
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
    getFormById: builder.query({
      query: (id) => ({
        url: `/form/${id}`,
        method: METHOD.GET,
      }),
    }),
    submitForm: builder.mutation({
      query: (formData) => ({
        url: "/submit-form",
        method: METHOD.POST,
        body: formData,
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
  useGetMyEventsQuery,
  useGetAdminEventsQuery,
  useCreateFormMutation,
  useGetFormByIdQuery,
  useSubmitFormMutation,
} = EventApi;

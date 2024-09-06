import {
  TCourse,
  TOfferedCourse,
  TQueryParams,
  TRegisteredSemester,
  TResponseRedux,
} from "../../../types";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRegisteredSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args.length) {
          args.forEach((arg: TQueryParams) => {
            params.append(arg.name, arg.value as string);
          });
        }

        return {
          url: "/semester-registrations",
          method: "GET",
          params,
        };
      },
      providesTags: ["RegisteredSemesters"],
      transformResponse: (response: TResponseRedux<TRegisteredSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addRegistrationSemester: builder.mutation({
      query: (data) => ({
        url: "/semester-registrations/create-semester-registration",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["RegisteredSemesters"],
    }),
    updateRegistrationSemester: builder.mutation({
      query: ({ id, data }) => ({
        url: `/semester-registrations/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["RegisteredSemesters"],
    }),
    getAllCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args.length) {
          args.forEach((arg: TQueryParams) => {
            params.append(arg.name, arg.value as string);
          });
        }

        return {
          url: "/courses",
          method: "GET",
          params,
        };
      },
      providesTags: ["Course"],
      transformResponse: (response: TResponseRedux<TCourse[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addCourse: builder.mutation({
      query: (data) => ({
        url: "/courses/create-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Course"],
    }),

    getCourseFaculties: builder.query({
      query: (courseId) => ({
        url: `/courses/${courseId}/get-faculties`,
        method: "GET",
      }),
    }),
    addCourseFaculties: builder.mutation({
      query: ({ data, courseId }) => ({
        url: `/courses/${courseId}/assign-faculties`,
        method: "PUT",
        body: data,
      }),
    }),
    getAllOfferedCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args.length) {
          args.forEach((arg: TQueryParams) => {
            params.append(arg.name, arg.value as string);
          });
        }

        return {
          url: "/offered-courses",
          method: "GET",
          params,
        };
      },
      providesTags: ["OfferedCourse"],
      transformResponse: (response: TResponseRedux<TOfferedCourse[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addOfferCourse: builder.mutation({
      query: (data) => ({
        url: "/offered-courses/create-offered-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["OfferedCourse"],
    }),
  }),
});

export const {
  useAddRegistrationSemesterMutation,
  useGetAllRegisteredSemestersQuery,
  useUpdateRegistrationSemesterMutation,
  useGetAllCoursesQuery,
  useAddCourseMutation,
  useAddCourseFacultiesMutation,
  useGetCourseFacultiesQuery,
  useAddOfferCourseMutation,
  useGetAllOfferedCoursesQuery,
} = courseManagementApi;

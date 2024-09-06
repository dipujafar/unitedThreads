import { TQueryParams, TResponseRedux, TStudentOfferedCourse } from "../../../types";
import { baseApi } from "../../api/baseApi";

const studentCourseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudentOfferedCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args.length) {
          args.forEach((arg: TQueryParams) => {
            params.append(arg.name, arg.value as string);
          });
        }
        return {
          url: "/offered-courses/my-offered-courses",
          method: "GET",
          params,
        };
      },
      providesTags: ["StudentCourse"],
      transformResponse: (response: TResponseRedux<TStudentOfferedCourse[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getMySchedule: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args.length) {
          args.forEach((arg: TQueryParams) => {
            params.append(arg.name, arg.value as string);
          });
        }
        return {
          url: "/enrolled-courses/my-enrolled-courses",
          method: "GET",
          params,
        };
      },
      providesTags: ["StudentCourse"],
      transformResponse: (response: TResponseRedux<TStudentOfferedCourse[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addEnrollCourse: builder.mutation({
      query: (data) => ({
        url: "/enrolled-courses/create-enrolled-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["StudentCourse"],
    }),
  }),
});

export const {
  useGetAllStudentOfferedCoursesQuery,
  useGetMyScheduleQuery,
  useAddEnrollCourseMutation,
} = studentCourseManagementApi;

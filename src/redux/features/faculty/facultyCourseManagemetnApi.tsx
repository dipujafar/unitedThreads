import { TQueryParams, TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";

const studentCourseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacultyCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args.length) {
          args.forEach((arg: TQueryParams) => {
            params.append(arg.name, arg.value as string);
          });
        }
        return {
          url: "/enrolled-courses",
          method: "GET",
          params,
        };
      },
      providesTags: ["StudentCourse"],
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addStudentMarks: builder.mutation({
      query: (data) => ({
        url: "/enrolled-courses/update-enrolled-course-marks",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllFacultyCoursesQuery, useAddStudentMarksMutation } =
  studentCourseManagementApi;

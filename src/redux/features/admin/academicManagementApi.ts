import { TAcademicSemester, TDepartmentData, TQueryParams, TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args.length) {
          args.forEach((arg: TQueryParams) => {
            params.append(arg.name, arg.value as string);
          });
        }

        return {
          url: "/academic-semesters",
          method: "GET",
          params,
        };
      },
      providesTags: ["AcademicSemesters"],
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["AcademicSemesters"],
    }),

    getAllAcademicFaculty: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args.length) {
          args.forEach((arg: TQueryParams) => {
            params.append(arg.name, arg.value as string);
          });
        }
        return {
          url: "/academic-faculties",
          method: "GET",
          params,
        };
      },
      providesTags: ["AcademicFaculties"],
    }),

    addAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculties/create-academic-faculty",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["AcademicFaculties"],
      transformResponse: (response: TResponseRedux<any[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getAllAcademicDepartment: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args.length) {
          args.forEach((arg: TQueryParams) => {
            params.append(arg.name, arg.value as string);
          });
        }
        return {
          url: "/academic-departments",
          method: "GET",
          params,
        };
      },
      providesTags: ["AcademicDepartments"],
      transformResponse: (response: TResponseRedux<TDepartmentData[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicDepartment: builder.mutation({
      query: (data) => ({
        url: "/academic-departments/create-academic-department",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["AcademicDepartments"],
    }),
    getUserDetails: builder.query({
      query: ({ userType, id }) => ({
        url: `/${userType}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllSemestersQuery,
  useAddAcademicSemesterMutation,
  useGetAllAcademicFacultyQuery,
  useAddAcademicFacultyMutation,
  useGetAllAcademicDepartmentQuery,
  useAddAcademicDepartmentMutation,
  useGetUserDetailsQuery,
} = academicManagementApi;

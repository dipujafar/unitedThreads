import { TAdmin, TCourseFaculty, TQueryParams, TResponseRedux, TStudent } from "../../../types";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args.length) {
          args.forEach((arg: TQueryParams) => {
            params.append(arg.name, arg.value as string);
          });
        }

        return {
          url: "/students",
          method: "GET",
          params,
        };
      },
      providesTags: ["Students"],
      transformResponse: (response: TResponseRedux<TStudent[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Students"],
    }),
    getAllAdmins: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args.length) {
          args.forEach((arg: TQueryParams) => {
            params.append(arg.name, arg.value as string);
          });
        }

        return {
          url: "/admins",
          method: "GET",
          params,
        };
      },
      providesTags: ["Admin"],
      transformResponse: (response: TResponseRedux<TAdmin[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAdmin: builder.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Admin"],
    }),
    getAllFaculties: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args.length) {
          args.forEach((arg: TQueryParams) => {
            params.append(arg.name, arg.value as string);
          });
        }

        return {
          url: "/faculties",
          method: "GET",
          params,
        };
      },
      providesTags: ["Faculty"],
      transformResponse: (response: TResponseRedux<TCourseFaculty[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addFaculty: builder.mutation({
      query: (data) => ({
        url: "/users/create-faculty",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Faculty"],
    }),
  }),
});

export const {
  useAddStudentMutation,
  useGetAllStudentsQuery,
  useGetAllAdminsQuery,
  useAddAdminMutation,
  useGetAllFacultiesQuery,
  useAddFacultyMutation,
} = userManagementApi;

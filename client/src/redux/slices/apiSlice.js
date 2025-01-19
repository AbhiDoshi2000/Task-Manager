import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const API_URI = "https://localhost:8800/api";

const baseQuery = fetchBaseQuery({ baseURL : API_URI});

export const apiSlice = createApi ({
    baseQuery,
    tagTypes: [],
    endpoints: (builder) => ({}),
});

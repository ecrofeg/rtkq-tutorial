import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Response {
  Search:       Search[];
  totalResults: string;
  Response:     string;
}

export interface Search {
  Title:  string;
  Year:   string;
  imdbID: string;
  Type:   Type;
  Poster: string;
}

export enum Type {
  Movie = "movie",
  Series = "series",
}

export const moviesApi = createApi({
  reducerPath: 'movies',
  refetchOnFocus: true,
  tagTypes: ['Movie'],
  baseQuery: fetchBaseQuery({baseUrl: 'http://www.omdbapi.com/'}),
  endpoints: builder => ({
    searchMovie: builder.query<Search[], string>({
      query: (title) => ({
        url: '/',
        params: {
          s: title,
          apikey: import.meta.env.VITE_API_TOKEN,
          plot: 'full'
        }
      }),
      providesTags: ['Movie'],
      transformResponse: (response: Response) => response.Search
    }),
    addMovie: builder.mutation<void, void>({
      query: () => ({
        url: '/add-movie'
      }),
      invalidatesTags: ['Movie'],
    })
  })
})

export const { useSearchMovieQuery, useAddMovieMutation } = moviesApi

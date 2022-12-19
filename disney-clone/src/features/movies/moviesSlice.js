import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommend:[],
    newDisney:[],
    original:[],
    trending:[],
};

const moviesSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        setMovies:(state,action)=>{
            state.recommend = action.payload
            state.newDisney = action.payload
            state.original = action.payload
            state.trending = action.payload
        },
    },
})

export const { setMovies } = moviesSlice.actions

export const selectRecommend = (state) => state.movies.recommend
export const selectNewDisney = (state) => state.movies.newDisney
export const selectOriginal = (state) => state.movies.original
export const selectTrending = (state) => state.movies.trending

export const moviesReducer = moviesSlice.reducer
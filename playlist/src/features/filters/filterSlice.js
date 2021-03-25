import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name:'filters',
    initialState: {
        genre="all",
        stars=0,
    },
    reducers:{
        filterGenre: (state , genre) => {
            return {...state,
                genre
            }
        },
        filterStars: (state , stars) => {
            return {...state,
                stars
            }
        }
    }
})

export const { filterGenre , filterStars } = filterSlice.actions;

export const selectGenre = state => state.filters.genre;

export const selectStars = state => state.filters.stars;

export default filterSlice.reducer;
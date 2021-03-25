import { configureStore } from '@reduxjs/toolkit';
import songsReducer from '../features/songs/songSlice';
import filterReducer from '../features/filters/filterSlice';

export default configureStore({
  reducer: {
    songs: songsReducer,
    filters: filterReducer,
  },
});

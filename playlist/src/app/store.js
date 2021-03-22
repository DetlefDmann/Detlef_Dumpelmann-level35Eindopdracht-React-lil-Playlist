import { configureStore } from '@reduxjs/toolkit';
import songsReducer from '../features/songs/songSlice';

export default configureStore({
  reducer: {
    songs: songsReducer,
  },
});

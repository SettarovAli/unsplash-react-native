import axios from 'axios';
import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'images',
  initialState: [],
  reducers: {
    imagesLoaded: (state, action) => {
      return action.payload;
    },
    imagesMoreLoaded: (state, action) => {
      return state.concat(action.payload);
    },
  },
});

const {imagesLoaded, imagesMoreLoaded} = slice.actions;

export default slice.reducer;

export const fetchImages = (term, page) => async (dispatch, getState) => {
  const response = await axios.get(
    'https://api.unsplash.com/search/photos/?client_id=ApkuGV-vXcNEY7q-fQUySByc6moylXJHr4W2J0K2zQM',
    {params: {query: term, page, per_page: 10}},
  );
  dispatch(imagesLoaded(response.data.results));
};

export const fetchMoreImages = (term, page) => async (dispatch, getState) => {
  const response = await axios.get(
    'https://api.unsplash.com/search/photos/?client_id=ApkuGV-vXcNEY7q-fQUySByc6moylXJHr4W2J0K2zQM',
    {params: {query: term, page, per_page: 10}},
  );
  dispatch(imagesMoreLoaded(response.data.results));
};

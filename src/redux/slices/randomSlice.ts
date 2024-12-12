import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiKey from "../../constants";
import {PhotoDataProps, PhotoProps, PhotoPropsRandom, StateProps } from './photoSlice';

const initialState: PhotoPropsRandom = {
  photoData: [],
  dataClicker: 1,
  status: "",
};

export const fetchRandom = createAsyncThunk("random/fetchRandom", async () => {
  const { data } = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=4`
  );
  return data as PhotoDataProps[];
});

export const randomSlice = createSlice({
  name: "random",
  initialState,
  reducers: {
    getAnotherPosts: (state) => {
      state.dataClicker += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRandom.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchRandom.fulfilled, (state, action) => {
      state.photoData = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchRandom.rejected, (state) => {
      state.photoData = [];
      state.status = "error";
    });
  },
});

export const { getAnotherPosts } = randomSlice.actions;
export default randomSlice.reducer;

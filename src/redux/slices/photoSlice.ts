import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiKey from "../../constants";

export type PhotoDataProps = {
  media_type: string;
  url: string;
  title: string;
  date: string;
  explanation: string;
};

export type PhotoProps = {
  dateOfPhotoSubmit: string;
  photoData: PhotoDataProps;
  status: string;
};

export type PhotoPropsRandom = {
  photoData: PhotoDataProps[];
  dataClicker: number;
  status: string;
};

export type GaleryProps = {
  photoData: PhotoDataProps[],
  dateOfStart: string,
  dateOfEnd: string,
  status: string,
}

export type StateProps = {
  photo: PhotoProps;
  random: PhotoPropsRandom;
  galery: GaleryProps;
};

const initialState: PhotoProps = {
  photoData: {
    media_type: "",
    url: "",
    title: "",
    date: "",
    explanation: "",
  },
  dateOfPhotoSubmit: "2016-01-02",
  status: "success",
};

export const fetchPhoto = createAsyncThunk(
  "photo/fetchPhoto",
  async (dateOfPhotoSubmit: string) => {
    const { data } = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateOfPhotoSubmit}`
    );
    return data;
  }
);

export const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    handleSubmit: (state, action) => {
      state.dateOfPhotoSubmit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhoto.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPhoto.fulfilled, (state, action) => {
      state.photoData = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchPhoto.rejected, (state) => {
      state.photoData = {
        media_type: "",
        url: "",
        title: "",
        date: "",
        explanation: "",
      };
      state.status = "error";
    });
  },
});

export const { handleSubmit } = photoSlice.actions;
export default photoSlice.reducer;

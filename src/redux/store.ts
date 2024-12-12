import { configureStore } from "@reduxjs/toolkit";
import random from "./slices/randomSlice";
import photo from "./slices/photoSlice";
import galery from './slices/galerySlice';

const store = configureStore({
  reducer: {
    random,
    photo,
    galery
  },
});

export default store;
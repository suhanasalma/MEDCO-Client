import { configureStore } from "@reduxjs/toolkit";
import ValidationReducer from "../ValidationSlide/ValidationSlide";

export default configureStore({
  reducer: {
   validation:ValidationReducer
  },
});

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ValidationReducer from "../ValidationSlide/ValidationSlide";
import FirebaseLoginReducer from "../FirebaseLoginSlice/FirebaseLoginSlice";



export default configureStore({
  reducer: {
    validation: ValidationReducer,
    firebaseLogin: FirebaseLoginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  devTools: process.env.NODE_ENV !== "production",
});

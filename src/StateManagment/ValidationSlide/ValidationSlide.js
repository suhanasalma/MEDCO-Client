import { createSlice } from "@reduxjs/toolkit";
import { inputFieldValidation } from "./validation";

const initialState = {
  validationSchema: inputFieldValidation,
};

const validationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {},
});

export default validationSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { inputFieldValidation } from "./validation";



const initialState = {
  validationSchema: inputFieldValidation,
};

const validationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {},
  serialize: {
    // Define custom serialization logic for non-serializable values
    validationSchema: (value) => value.toString(),
  },
});

export default validationSlice.reducer;

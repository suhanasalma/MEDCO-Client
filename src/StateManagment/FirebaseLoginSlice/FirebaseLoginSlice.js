import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { createSlice } from "@reduxjs/toolkit";
import { app } from "../../Firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const firebaseLoginSlice = createSlice({
  name: "firebaseLoginSlice",
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    signInWithGoogle: (state) => {
      state.error = null;
    },
    signInWithGoogleSuccess: (state, action) => {
      state.user = action.payload;
    },
    signInWithGoogleFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { signInWithGoogle, signInWithGoogleSuccess, signInWithGoogleFailure } =
  firebaseLoginSlice.actions;

export const signInWithGoogleAsync = () => async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    dispatch(signInWithGoogleSuccess(user));
  } catch (error) {
    dispatch(signInWithGoogleFailure(error.message));
  }
};

export default firebaseLoginSlice.reducer
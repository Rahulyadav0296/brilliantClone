import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CourseState } from "./courseSlice";

interface UserState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  age: number | null;
  open: boolean;
  isOpen: boolean;
  showSignup: boolean;
  user: string | null;
  loading: boolean;
  error: string | null;
  token: string;
  currentCourse?: CourseState;
}
interface courseState {
  courses: CourseState[];
  user: UserState;
}

const initialState: UserState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  age: null,
  open: false,
  isOpen: false,
  showSignup: false,
  user: null,
  loading: false,
  error: null,
  token: localStorage.getItem("Token") || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },

    setOpen(state, action: PayloadAction<boolean>) {
      state.open = action.payload;
    },
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },

    setShowSignup(state, action: PayloadAction<boolean>) {
      state.showSignup = action.payload;
    },
    setFirstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    setLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    },

    setAge(state, action: PayloadAction<number>) {
      state.age = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearUserState: (state) => {
      state.user = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  setEmail,
  setPassword,
  setAge,
  setFirstName,
  setLastName,
  setOpen,
  setIsOpen,
  setShowSignup,
  setUser,
  setToken,
  setError,
  setLoading,
} = authSlice.actions;

export default authSlice.reducer;

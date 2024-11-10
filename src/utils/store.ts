import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import authReducer from "./authSlice";
import courseReducer from "./courseSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export type AppDispatch = typeof store.dispatch;
export default store;

export type RootState = ReturnType<typeof store.getState>;

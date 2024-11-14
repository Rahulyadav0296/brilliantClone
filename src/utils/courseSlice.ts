// redux/courseSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CourseState = {
  id: string;
  title: string;
  category: "New Courses" | "Math" | "Data" | "Computer Science" | "Science";
  isNew: boolean;
  image: string;
  progress?: number;
};

const initialState: CourseState = {
  id: "",
  title: "",
  category: "New Courses",
  isNew: false,
  image: "",
  progress: 0,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<CourseState>) => {
      return { ...state, ...action.payload };
    },

    resetCourse() {
      return initialState;
    },
  },
});

export const { setCourses, resetCourse } = courseSlice.actions;
export default courseSlice.reducer;

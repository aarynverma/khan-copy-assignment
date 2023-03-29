import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface topic {
  annotation: string;
  name: string;
  points_to_earn: number;
  id: string;
}

interface chapter {
annotation: string;
name: string;
points_to_earn: number;
id: string;
topics:topic[];
}

export interface SubjectState {
class: string;
subject: string;
chapters:chapter[];
}

const initialState: SubjectState = {
  class: "",
  subject: "",
  chapters: [],
};

export const SubjectSlice = createSlice({
  name: "Subject",
  initialState,
  reducers: {
    setSubject: (state, action: PayloadAction<SubjectState>) => {
      return action.payload;
    },
    changeSubject: (state, action: PayloadAction<SubjectState>) => {
      state.subject += action.payload.subject;
    },
    changeClass: (state, action: PayloadAction<SubjectState>) => {
      state.class += action.payload.class;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeSubject, changeClass, setSubject } = SubjectSlice.actions;

export default SubjectSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SubjectState {
  class: string;
  subject: string;
  chapters: {
    annotation: string;
    name: string;
    points_to_earn: number;
    id: string;
    topics: {
      annotation: string;
      name: string;
      points_to_earn: number;
      id: string;
    }[];
  }[];
}

const initialState: SubjectState = {
  class: "",
  subject: "",
  chapters: [
    {
      annotation: "",
      name: "",
      points_to_earn: 0,
      id: "",
      topics: [
        {
          annotation: "",
          name: "",
          points_to_earn: 0,
          id: "",
        },
      ],
    },
  ],
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

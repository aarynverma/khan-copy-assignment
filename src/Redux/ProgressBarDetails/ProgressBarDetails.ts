import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface ProgressBarState {
    progress: [{ id: string, progress: number }],
 }

const initialState:  ProgressBarState = {
    progress: [{ id: "", progress: 0 }],
  }


export const ProgressBar = createSlice({
    name: "ProgressBar",
    initialState,
    reducers: {
         progressResults: (state, action: PayloadAction<ProgressBarState>) => {
        return action.payload;
      },
    },
  });

export const { progressResults } = ProgressBar.actions;

export default ProgressBar.reducer;


  
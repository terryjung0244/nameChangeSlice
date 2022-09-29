import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: 'Terry',
};

const nameChangeSlice = createSlice({
  name: "nameChange",
  initialState,
  reducers: {
    nameChangeAction : (state, action) => {
      console.log(action)
      state.name = action.payload
    },
  }
});

export const { nameChangeAction } = nameChangeSlice.actions;

export default nameChangeSlice.reducer;

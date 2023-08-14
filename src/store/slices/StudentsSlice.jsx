import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialValue: [],
};

let f = initialState.initialValue;

const StudentSlice = createSlice({
  name: "searchStudent",
  initialState,
  reducers: {
    studentList: (state, action) => {
      console.log("dekjb");
      state.initialValue = action.payload;
      f = action.payload;
    },
    searchStudent: (state, action) => {
      state.initialValue = f;
      state.initialValue = state.initialValue.filter((student) =>
        student.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    categoryStudent: (state, action) => {
      // console.log(action.payload.gender,action.payload.isHosteler)
      state.initialValue = f;
      state.initialValue = state.initialValue.filter((student) =>
        student.gender.includes(action.payload.gender)
      );
      state.initialValue = state.initialValue.filter(
        (student) => student.isHosteler.toString() == action.payload.isHosteler
      );
    },
  },
});

export default StudentSlice.reducer;
export const { searchStudent, categoryStudent, studentList } =
  StudentSlice.actions;

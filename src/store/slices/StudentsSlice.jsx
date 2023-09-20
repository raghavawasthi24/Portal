import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialValue: [],
  currentStudent: [],
};

let f = initialState.initialValue;

const StudentSlice = createSlice({
  name: "searchStudent",
  initialState,
  reducers: {
    studentList: (state, action) => {
      // console.log("dekjb");
      state.initialValue = action.payload;
      f = action.payload;
    },
    searchStudent: (state, action) => {
      console.log(action.payload)
      state.initialValue = f;
      state.initialValue = state.initialValue.filter((student) =>
        student.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      // console.log(state.initialValue);
      if (state.initialValue == "") {
        // console.log("nnnn");
        state.initialValue = f;
        // console.log(state.initialValue);
        state.initialValue = state.initialValue.filter(
          (student) => student.studentNo == action.payload
        );
      }
      if (state.initialValue == "") {
        // console.log("nnnn");
        state.initialValue = f;
        // console.log(state.initialValue);
        state.initialValue = state.initialValue.filter(
          (student) => student.branch == action.payload
        );
      }
    },
    categoryStudent: (state, action) => {
      // console.log(action.payload.gender,action.payload.isHosteler)
      if (action.payload.category == "All") {
        state.initialValue = f;
      } else {
        state.initialValue = f;
        state.initialValue = state.initialValue.filter((student) =>
          student.gender.includes(action.payload.gender)
        );
        state.initialValue = state.initialValue.filter(
          (student) =>
            student.isHosteler.toString() == action.payload.isHosteler
        );
      }
    },
    findStudent: (state, action) => {
      state.currentStudent = state.initialValue.filter(
        (student) => student.studentNo == action.payload
      );
    },
  },
});

export default StudentSlice.reducer;
export const { searchStudent, categoryStudent, studentList, findStudent } =
  StudentSlice.actions;

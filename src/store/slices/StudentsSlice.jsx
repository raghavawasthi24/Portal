import { createSlice } from "@reduxjs/toolkit";

const initialState =
  {
    initialValue:["shipra"]
  };

const StudentSlice = createSlice({
  name: "searchStudent",
  initialState,
  reducers: {
    searchStudent: (state, action) => {
    //   state.initialValue.filter((student) =>
    //     student.Name.toLowerCase().includes(action.payload.toLowerCase())
    //   );
    
    console.log(state.initialValue,action.payload)
    },
  },
});

export default StudentSlice.reducer;
export const { searchStudent } = StudentSlice.actions;

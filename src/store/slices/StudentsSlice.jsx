import { createSlice,current } from "@reduxjs/toolkit";


const initialState =
  {
    initialValue:[
      {
        Name:"Shipra Tripathi",
        Number:"2110321"
      },
      {
        Name:"Raghav Awasthi",
        Number:"2110158"
    },
    {
      Name:"Ishu Singh",
      Number:"21103212"
    },
    
    ]
  };

  let f=initialState.initialValue;

const StudentSlice = createSlice({
  name: "searchStudent",
  initialState,
  reducers: {
    searchStudent: (state, action) => {
      state.initialValue = f;
      state.initialValue = state.initialValue.filter((student) =>     
           student.Name.toLowerCase().includes(action.payload.toLowerCase())
      )
      
    
    console.log(f,action.payload)
    },
  },
});

export default StudentSlice.reducer;
export const { searchStudent } = StudentSlice.actions;

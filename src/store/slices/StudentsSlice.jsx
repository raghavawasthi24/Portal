import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialValue: [],
};

<<<<<<< HEAD
const initialState =
  {
    initialValue:[
      {
        Name:"Shipra Tripathi",
        Number:"2110321",
        hosteler:"yes",
      },
      {
        Name:"Raghav Awasthi",
        Number:"2110158"
    },
    {
      Name:"Abhinav Tripathi",
      Number:"21103212"
    },
    
    ]
  };

  let f=initialState.initialValue;
=======
let f = initialState.initialValue;
>>>>>>> a3cc9cc11a45112350dc10306bce86898a474733

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
      
    axios.get("https://exam-portal-django.onrender.com/accounts/StudentList/")
    .then((response) => setStudents(response.data))
    .catch((error) => console.error(error));                                   

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
<<<<<<< HEAD
export const { searchStudent,categoryStudent } = StudentSlice.actions;






















=======
export const { searchStudent, categoryStudent, studentList } =
  StudentSlice.actions;
>>>>>>> a3cc9cc11a45112350dc10306bce86898a474733

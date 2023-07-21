import React ,{useState} from 'react';
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { searchStudent } from '../../../../../store/slices/StudentsSlice';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
  const dispatch=useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    dispatch(searchStudent(event.target.value))
  };

  return (
    <div>
    <TextField
    label="Search the Candidate"
    variant="outlined"
    value={searchQuery}
    onChange={handleSearch}
    InputProps={{
      startAdornment: <SearchIcon />,
    }}
    sx={{ width: "100%" }}
  />
    </div>
  )
}

export default SearchBar

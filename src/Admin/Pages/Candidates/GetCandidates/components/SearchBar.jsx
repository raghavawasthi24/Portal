import React from 'react';
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div>
    <TextField
    label="Search the Candidate"
    variant="outlined"
    // value={searchQuery}
    // onChange={handleSearch}
    InputProps={{
      startAdornment: <SearchIcon />,
    }}
    sx={{ width: "20rem" }}
  />
    </div>
  )
}

export default SearchBar

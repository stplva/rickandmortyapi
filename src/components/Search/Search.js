import React from 'react'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'

const Search = ({ searchQuery, setSearchQuery, setPageNumber }) => {
    const handleChange = e => {
    setSearchQuery(e.target.value);
    setPageNumber(1);
  }
  
  return (
    <FormControl 
      sx={{ mb: 4 }}>
      <TextField 
        id="outlined-search" 
        label="Search for characters" 
        type="search" 
        value={searchQuery} 
        onChange={handleChange}
        sx={{ width: 650 }} />
    </FormControl>
  )
}

export default Search

import { Container } from '@mui/material'
import React from 'react'
import './css/SearchBar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
export const SearchBar = () => {
  return (
    <Container maxWidth="xl"  className="SearchBar">
      <div className="Search">
          <input type="text" placeholder='Search a article...'/>
          <SearchOutlinedIcon className="icon"/>
          <button type="submit">Search</button>
      </div>
    </Container>  
  )
}

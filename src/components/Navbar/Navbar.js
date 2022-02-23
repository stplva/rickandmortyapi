import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'

const Navbar = () => {
  return (
    <nav>
      <Link className='navLink' to={'/'}>
        <Typography variant="h3" sx={{ m: 2 }}>
            Rick & Morty Characters
        </Typography>
      </Link>
    </nav>
  )
}

export default Navbar
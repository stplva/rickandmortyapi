import React from 'react'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'

const Cards = ({ results }) => {
  let display;

  if (results) {
    display = results.map(char => {
      let { id, name, status, image } = char;
      let statusColor = status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : '';
      return (
        <Grid item xs={3} key={id}>
          <Link className='cardLink' to={`/${id}`}>
            <img 
              src={image} 
              alt=''
              loading="lazy"
              style={{maxWidth: '100%'}} />
              <b>{name}</b>
              <p>Status: <span style={{ color: statusColor }}>{status}</span></p>
          </Link>
        </Grid>
      )
    })
  } else {
    display = 'No characters found :(';
  }

  return <>{display}</>
}

export default Cards;
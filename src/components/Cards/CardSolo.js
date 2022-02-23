import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box'

const CardSolo = () => {
  
  //get character's id from router
  let { id } = useParams();

  const [fetchedData, setFetchedData] = useState([]);
  let { name, species, gender, location, origin, episode, status, created, image } = fetchedData;

  const [selectedImg, setSelectedImg] = useState(null);
  
  let url = `https://rickandmortyapi.com/api/character/${id}`;
  //custom Status color
  let statusColor = status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : '';

  useEffect(() => {
    //fetch character's data
    (async function () {
      let data = await fetch(url)
      .then(res => res.json())
      .catch(e => console.log(e));
      setFetchedData(data);
    }) ();
      
  }, [url]);

  //upload a new image
  const handleImageChange = (e) => {
    e.preventDefault();
    console.log(selectedImg)
    setSelectedImg(URL.createObjectURL(e.target.files[0]));

  }

  return (
    <>
    <Box sx={{width: '400px', mx: 'auto', display: 'flex', flexDirection: 'column'}}>
      <h2 align='center'>{name}</h2>
      <img 
        src={selectedImg || image} 
        alt=''
        loading="lazy"
        style={{maxWidth: '100%', marginBottom: '16px'}} />
      <input 
        type='file'
        accept="image/*"
        onChange={e => handleImageChange(e)} />
      <p><span style={{fontWeight: '500'}}>Status:</span> <span style={{ color: statusColor }}>{status}</span></p>
      <p><span style={{fontWeight: '500'}}>Species:</span> {species}</p>
      <p><span style={{fontWeight: '500'}}>Gender:</span> {gender}</p>
      <p><span style={{fontWeight: '500'}}>Location:</span> {location?.name}</p>
      <p><span style={{fontWeight: '500'}}>Origin:</span> {origin?.name}</p>
      <p><span style={{fontWeight: '500'}}>Episodes with:</span> {episode?.length}</p>
      <p><span style={{fontWeight: '500'}}>Created:</span> {created}</p>
    </Box>
    </>
  )
}

export default CardSolo
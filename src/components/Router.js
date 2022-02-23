import React from 'react'
import App from '../App'
import Container from '@mui/material/Container'
import CardSolo from './Cards/CardSolo'
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
  return(
    <BrowserRouter>
      <div className="App">
        <Container maxWidth="md">
          <Navbar />

          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/:id" element={<CardSolo />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default Router;
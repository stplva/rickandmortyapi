import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Search from './components/Search/Search'
import Cards from './components/Cards/Cards'
import Pagination from './components/Pagination/Pagination'
import '@fontsource/roboto/400.css'
import './App.css';

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  let { info, results } = fetchedData;
  const [searchQuery, setSearchQuery] = useState('');
  let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchQuery}`;

  useEffect(() => {
    //fetch all characters data
    (async function () {
      let data = await fetch(url)
      .then(res => res.json())
      .catch(e => console.log(e));
      setFetchedData(data);
    }) ();
      
  }, [url]);

  return (
    <>
    <header>        
      <Search 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setPageNumber={setPageNumber} />
    </header>
    <div >
      <Grid container spacing={2}>
        <Cards results={results}/>
      </Grid >
    </div>
    <Pagination 
      info={info}
      pageNumber={pageNumber} 
      setPageNumber={setPageNumber} />
    </>
  );
}

export default App;
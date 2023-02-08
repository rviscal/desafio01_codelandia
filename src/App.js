import './App.css';
import Header from './Components/Header/Header'
import Container from './Components/Container/Container';
import React, { useState } from 'react';

function App() {

  const [search, setSearch] = useState('');
  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Container search={search}/>
    </>
  );
}
export default App;

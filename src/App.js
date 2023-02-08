import './App.css';
import Header from './Components/Header/Header'
import Container from './Components/Container/Container';
import React, { useState } from 'react';

function App() {

  const [pesquisa, setPesquisa] = useState('');
  return (
    <>
      <Header pesquisa={pesquisa} setPesquisa={setPesquisa} />
      <Container pesquisa={pesquisa} setPesquisa={setPesquisa} />
    </>
  );
}
export default App;

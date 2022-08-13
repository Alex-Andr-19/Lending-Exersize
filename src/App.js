import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Posts from './components/Posts/Posts';

function App() {

  

  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Posts/>
    </div>
  );
}

export default App;

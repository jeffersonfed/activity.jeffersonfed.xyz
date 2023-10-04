import React from 'react';
// import logo from './logo.svg';
import { MainWeb } from './containers/Main'
import { AboutWeb } from './containers/About'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainWeb />}/>
          <Route path="/about" element={<AboutWeb />}/>
          {/* <Route path="/help" exact component={Help}/>
          <Route path="/animes" exact component={Animes}/>
          <Route path="/news/:id" exact component={News}></Route> */}
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headder from './componet/headder';
import Banner_Headder from './componet/banner_headder';
import NaviagtionBar from './componet/navigation_bar';
import Footer from './componet/footer';
import DataBody from './componet/data_body';

function App() {
  return (
    <div className="App">
      <Headder/>
      <Banner_Headder/>
      <NaviagtionBar/>
      <DataBody/>
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { useState } from "react";

import Facebook from './Components/Facebook'
import  Google  from './Components/Google'
import { Github } from './Components/Github'

function App() {
	const  setData = useState({});

  return (
    <div className="App App-header">
      <h2>My Social App</h2> 
       <Google></Google>  
      <Facebook></Facebook>
      <Github  displayData={setData} />
      	</div>

     


               

  );
}

export default App;

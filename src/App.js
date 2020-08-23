import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import HomeComponent from "./UI/Home/homeComponent"
import EventComponent from "./UI/Event/eventComponent"




function App() {


  return (
    <div class="appBody">
    <BrowserRouter>

        <Route exact path="/" component={HomeComponent} />
        <Route path="/event/:id" component={EventComponent} />
   
    </BrowserRouter>

    </div>

  );
}

export default App;

import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Notes from "./components/NoteItems";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const title = 'Likhley';
  const about = 'All Notes';
  return (
      <NoteState> 
        <Router>
          <Navbar title={title} about={about}/>
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home
                    key="home"
                  />
                }
              ></Route>
              <Route
                exact
                path="/notes"
                element={
                  <Notes
                    key="notes"
                  />
                }
              ></Route>
            </Routes>
          </div>
        </Router>
      </NoteState> 
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Todos from './components/Todos';
import TodoDetail from './components/TodoDetail';
import NavBar from './components/Header';
import Header from './components/Header';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import WithoutNavBar from './components/WithoutNavBar';
import WithNavBar from './components/WithNav';


function App() {

  return (

    <div className="App">
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route element={<WithoutNavBar />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<WithNavBar />}>
            <Route path="/todos" element={<Todos />} />
          </Route>
        </Routes>
      </Router>



    </div >

  );
}

export default App;

import React from 'react';

import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/pages/Home.jsx';
import AddEdit from './components/pages/AddEdit.jsx';
import View from './components/pages/View.jsx';
import About from './components/pages/About.jsx';
import Header from './components/Header.jsx';
const App =()=>{
return(
  <BrowserRouter>

<div className="App">
  <Header></Header>
 <ToastContainer position='top-center'/>
  <Routes>
    <Route exact path='/' Component={Home}/>
    <Route  path='/add' Component={AddEdit}/> ``
    <Route  path='/update/:id' Component={AddEdit}/>
    <Route  path='/view/:id' Component={View}/>
    <Route  path='/about' Component={About}/>
  </Routes>
</div>
</BrowserRouter>
)
}
export default App
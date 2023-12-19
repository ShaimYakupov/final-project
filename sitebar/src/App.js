import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import styles from './app.scss'

// import siteblock component
import Sitebar from './components/sitebar/Sitebar'
import Header from './components/header/Header'

//import project component

import Projects from './components/projects/Projects';
import About from './components/about/About';

import Generate from './components/generate/Generate';
import Calculator from './components/calculator/Calculator';


import ToDoList from './components/todoList/ToDoList'

import Goal from './components/goal/Goal'

import Graphic from './components/graphic/Graphic'
import CreateGraphic from './components/graphic/CreateGraphic'
import SitebarGraphic from './components/graphic/SitebarGraphic'

import Chat from './components/chat/Chat'
import Import from './components/import/Import'
import Download from './components/download/Download';


import Slider from './components/slider/Slider';


// regist component
import Login from './components/login/Login';
import Signup from './components/signup/Signup';


function App() {
  return (
    <div>

      <div className='structure'>
        <Sitebar/>

        <div className='rigth__block'>
          <Header/>

          <div className='main__block'>
            <Router>
                <Routes>

                  {/* sitebarMenu */}
                  <Route path="/Projects"  element={<Projects/>}></Route>
                  <Route path="/About"  element={<About/>}></Route>

                  
                  <Route path='/Calculator' element={<Calculator/>}></Route>

                  <Route path='/Generate' element={<Generate/>}></Route>
                  <Route path='/Chat' element={<Chat/>}></Route>
                  <Route path='/Goal' element={<Goal/>}></Route>

                  <Route path='/Graphic' element={<Graphic/>}></Route>
                  <Route path='/Graphic' element={<Graphic/>}></Route>
                  <Route path='/CreateGraphic' element={<CreateGraphic/>}></Route>
                  <Route path='/SitebarGraphic' element={<SitebarGraphic/>}></Route>

                  <Route path='/Import' element={<Import/>}></Route>
                  <Route path='/Download' element={<Download/>}></Route>

                  <Route path='/Slider' element={<Slider/>}></Route>

                  {/* autorization */}
                  <Route path='/Login' element={<Login/>}></Route>
                  <Route path='/Signup' element={<Signup/>}></Route>

                  {/* todositebar */}

                  <Route path='/ToDoList' element={<ToDoList/>}></Route>


                </Routes>
            </Router>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;

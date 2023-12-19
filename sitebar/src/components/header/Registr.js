import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Login from '../login/Login'
import Signup from '../signup/Signup'
import styles from './registr.scss'

const menu = [
    {
      title: 'Login',
      to: '/Login'
    },
    {
      title: 'Signup',
      to: '/Signup'
    }
  ]
const Registr = ()=>{
    return (
    <>
        <div className='buttons'>

          <ul className='register'>
            <li className='register__list'>
              <a href="/Login" className='register__link'>Login</a>
            </li>
            <li>
              <a href="/Signup" className='register__link'>Signup</a>
            </li>
          </ul>
          {/* {menu.map((item,idx) =>{
            <div key={`menu item ${idx}`}>
              <a href={item.to}>{item.title}</a>
            </div>
            
          })}

          <h2>hello world</h2> */}
            
        </div>
        
    </>
    )
}

export default Registr
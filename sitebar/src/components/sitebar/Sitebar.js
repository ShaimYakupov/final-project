import React, { Component } from 'react'

import styles from '../sitebar/sitebar.scss'
import Logo from "../../assets/logo.svg"

//import components
import Nav from './SitebarNav'

const Sitebar = () =>{
    return(
        <div className='sitebar'>
            <div className='logo'>
                <img className='logo__img' src={Logo} height={50}></img>
            </div>

            <Nav/>
        </div>
    )
}

export default Sitebar
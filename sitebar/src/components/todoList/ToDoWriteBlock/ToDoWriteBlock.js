import React, { Component, useState } from 'react'

// styles
import styles from './todomainblock.module.scss';

// import component
import CreateDoSystem from './CreateDoSystem';
import ShowData from './ShowTimeData'


const ToDoMainBlock = () =>  {

  
    return (
      <>
        <div className={styles.todo__mainblock}> 
            <ShowData/>
            <CreateDoSystem/>
        </div>
      </>
    )
  
}

export default ToDoMainBlock
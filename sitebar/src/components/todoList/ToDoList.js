import React, { useContext } from 'react'


// styles
import styles from '../todoList/todo.module.scss'

// import components
import Sitebar from '../todoList/todoSitebar/ToDoSitebar'
import ToDoWriteBlock from './ToDoWriteBlock/ToDoWriteBlock';

const ToDoList = () =>  {
    return (
      <>
      <div className={styles.todo__project}>
          <div className={styles.todo__container}>
          
            <Sitebar/>
            <ToDoWriteBlock />
            
          </div> 
        </div>
      </>
    )
  
}

export default ToDoList

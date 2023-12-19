import React, { Component, useState, useEffect } from 'react'

// fonts icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faCircle,faStar,faTrashCan } from '@fortawesome/free-solid-svg-icons';

// плагины
import{ v4 as uuidv4} from 'uuid'

// audio
import doneSound from '../ToDoWriteBlock/done.mp3'

// style
import styles from './todomainblock.module.scss'



const CreateDoSystem = () =>  {
  // значение написанного
  const [inputValue, setInputValue] = useState('');

  // создание элемента через enter
  const [newElement, setNewElement] = useState([]);

  const enterKeyBtn = (event) =>{
    if(event.key === 'Enter'){
      if(!inputValue){
        console.log('write a task')
      }else{
        const newItemId = uuidv4()
        setNewElement(prevNewElement => [...prevNewElement, {text: inputValue, id: newItemId}])
        setInputValue('');
      }
  }

  }
  // создание элемента  
  const createElementBtn = () => {
    if(!inputValue){
      console.log('write a task')
    }else{
      const newItemId = uuidv4()
      setNewElement(prevNewElement => [...prevNewElement, {text: inputValue, id: newItemId}])
      setInputValue('');
    }
  }

  // кнопка выпонение задачи
  const [completed, setCompleted] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const completedTaskBtn = (id) => {
    let quantity = 0;
    const completedItem = newElement.find((item) => item.id === id);
    if(completedItem) {
      setCompleted((prevCompleted) => [...prevCompleted, completedItem]);
      
    }

    const audio = new Audio(doneSound);
    audio.play();
    deleteDoBtn(id);
  }

  useEffect(() => {
    setQuantity(completed.length); // Обновляем счетчик при изменении состояния completed
  }, [completed]);

  
  // кнопка удаления
  const deleteDoBtn = (id) =>{
    const updateItems = newElement.filter((item) => item.id !== id);
    setNewElement(updateItems)
  }



  // показывать завершенные дела
  const [showCompleted, setShowCompleted] = useState(false);

  const showDoneTask = () => {
    setShowCompleted(!showCompleted);
  };

  return (
      <>
        <div className={styles.write__system}>

          <div className={styles.todolist__block}>
            <ul>
              
              {newElement.map((item, index) => (
                <li className={styles.todolist__number} key={index}>
                <FontAwesomeIcon 
                onClick={() => completedTaskBtn(item.id)}
                className={styles.circle__icon} 
                icon={faCircle} />
                  {item.text}
                <FontAwesomeIcon 
                onClick={() => deleteDoBtn(item.id)}
                className={styles.trash__icon} 
                icon={faTrashCan} />
                <FontAwesomeIcon className={styles.star__icon} icon={faStar} />
                </li>
              ))}    
              
            </ul>
          </div>

          <button
            className={styles.showCompleted}
            onClick={showDoneTask}>
            Завершенные {quantity}
          </button>

          <div className={`${styles.completed__task__block} ${showCompleted ? styles.completed__task__block__show : ''}`}>
              <ul>
                {completed.map((completedItem, completedIndex) => (
                  <li className={styles.todolist__number} key={completedIndex}>
                      {completedItem.text}
                  </li>
                ))}
              </ul>
          </div>

          <div className={styles.do__system}>
            <input 
              type='text' 
              className={styles.inputDo}
              value={inputValue}
              placeholder='Добавить задачу'
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={enterKeyBtn}
            ></input>
            <button>
              <FontAwesomeIcon 
              className={styles.addIcon} 
              onClick={createElementBtn}
              icon={faPlus} />
            </button>         

          </div>
        </div>
      </>
    )
}
export default CreateDoSystem

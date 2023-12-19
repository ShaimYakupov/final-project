import React, { Component, useEffect, useState, useRef } from 'react'

// icons

// плагины
import{ v4 as uuidv4} from 'uuid'



// style
import styles from './chat.module.scss'

const Chat = () => {

  // создание нового пользователя
  const [user, setUser] = useState('');

  // создание нового пользователя при клике на create ===============================
  const [row, setRows] = useState([]);
  const [showErrorMessage, setShowErrorMesaage] = useState('')

  const createBtn = () => {
    if(!user){
      setShowErrorMesaage('Write your name')
    }else{
      setShowErrorMesaage('')
      const newUserId = uuidv4()
      const newUser = { name: user, id: newUserId};
      setRows([...row, newUser]);
      setUser('');
    }
  }

  // создание нового пользователя через Enter
  const enterCreateBtn = (event) => {
    if(event.key === 'Enter'){
      if(!user){
        setShowErrorMesaage('Write your name')
      }else{
        setShowErrorMesaage('')
        const newUserId = uuidv4()
        const newUser = { name: user, id: newUserId};
        setRows([...row, newUser]);
        setUser('');
      }
    }
  }
  

  // функция отправки сообщения=========================================
  const [messageValue, setMessageValue] = useState('');
  const [messageRow, setMessageRow] = useState([]);

  // error 
  const [showErrorMessageChat, setShowErrorMesaageChat] = useState('');
  const [showUserError, setShowUserError] =  useState('');

  // фунция выбора пользователя===========================
  const [currentUser, setCurrentUser] = useState('');

    // Обработчик события при выборе пользователя из списка
  const userChoose = (selectedUser) => {
    setCurrentUser(selectedUser);

  };
  
  // одно и тоже имя
  const [lastSender, setLastSender] = useState('');


  const messageSend = () => {
    if(!messageValue){
      setShowErrorMesaageChat('write a message')
    }else{
      setShowErrorMesaageChat('');
      if(!currentUser){
        setShowUserError('Choose a user!')
      }else{
        setShowUserError('')
        if (currentUser && currentUser !== lastSender) {
          const newMessage = {
            name: currentUser,
            text: messageValue,
            time: new Date()
          };
    
          setMessageRow(prevMessageRow => [...prevMessageRow, newMessage]);
          setMessageValue('');
          setLastSender(currentUser);
        } else if(currentUser === lastSender){
            const newMessage = {
              name: '',
              text: messageValue,
              time: new Date() // Используем текущую дату и время отправки
            };
    
            setMessageRow(prevMessageRow => [...prevMessageRow, newMessage]);
            setMessageValue('')
          }
      }      
    }
  }

  // отправка сообщения через Enter
  const enterMessageSend = (event) => {
      if(event.key === "Enter"){
        if(!messageValue){
          setShowErrorMesaageChat('write a message')
        }else{
          setShowErrorMesaageChat('');
          if(!currentUser){
            setShowUserError('Choose a user!')
          }else {
            setShowUserError('')
            if (currentUser && currentUser !== lastSender) {
              const newMessage = {
                name: currentUser,
                text: messageValue,
                time: new Date()
              };
              
  
              setMessageRow(prevMessageRow => [...prevMessageRow, newMessage]);
              setMessageValue('');
              setLastSender(currentUser);
            } else if(currentUser === lastSender){
                const newMessage = {
                  name: '',
                  text: messageValue,
                  time: new Date() // Используем текущую дату и время отправки
                };
  
                setMessageRow(prevMessageRow => [...prevMessageRow, newMessage]);
                setMessageValue('')
              }
          }
          
        }
      }
  }

  //функция прокрутки вниз
  const containerRef = useRef(null);

  // Функция для прокрутки блока вниз
  const scrollToBottom = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };
  // Вызываем функцию прокрутки вниз после обновления содержимого
  useEffect(() => {
    scrollToBottom();
  }, [containerRef.current?.scrollHeight]);

  


    return (
      <>
       <div className={styles.chat__project}>
       {/* right block======================================================= */}
          <div className={styles.chat__window__block}>

          <div className={styles.error__Message}>{showUserError}</div>

            {/* верхний блок */}
            <div 
            ref={containerRef}
                style={{
                  overflowY: 'scroll',
                  maxHeight: '600px', // Укажите максимальную высоту блока, чтобы он был прокручиваемым
                }}
              className={styles.message__show__block} id="style-1">

              <div className={styles.message__block}>

                  {messageRow.map((messageRowItem, messageRowIndex) => (
                    <div key={messageRowIndex}
                        className={styles.user__message}>

                      <div className={styles.user__message__name}>
                        {messageRowItem.name}
                      </div>

                      <p className={styles.user__message__value}>
                        {messageRowItem.text}
                      </p>

                      <div className={styles.user__message__data}>
                          {messageRowItem.time && <span>{messageRowItem.time.toLocaleString()}</span>}
                      </div>

                    </div>

                  ))}
              </div>
            </div>

            {/* нижний блок */}
            <div className={styles.message__write__block}>
              <input 
              value={messageValue}
              onKeyDown={enterMessageSend}
              onChange={(e) => setMessageValue(e.target.value)}
              className={styles.message__value}>

              </input>
              <button 
              onClick={messageSend}
              className={styles.message__send__btn}>Send</button>
            </div>
            <div className={styles.error__Message}>{showErrorMessageChat}</div>
          </div>

          {/* left block==================================================== */}
          <div className={styles.autho__window__block}>
          {/* database */}
            <div className={styles.autho__database}>
              <ul>
                {row.map((rowItem, rowIndex) => (
                  <li onClick={() => userChoose(rowItem.name)} 
                  key={rowIndex} 
                  className={`${styles.database__user} ${currentUser === rowItem.name ? styles.selectedUser : ''}`}>                  {rowItem.name}
                  </li>
                ))}
                
              </ul>
            </div>

            {/* created function */}
            <div className={styles.autho__create__user}>
                <div className={styles.autho__created__block}>
                  <h3 className={styles.autho__create__title}>User</h3>
                  <input 
                  onKeyDown={enterCreateBtn}
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  className={styles.user__name}>

                  </input>
                  <button
                   className={styles.create__user__btn}

                   onClick={createBtn}>Create</button>
                   <div className={styles.error__Message}>{showErrorMessage}</div>
                </div>
            </div>
          </div>
       </div> 
      </>
    )
}
export default Chat


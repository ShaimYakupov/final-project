import React, { Component } from 'react'

// styles
import styles from './generate.scss'

// hooks
import {useState} from 'react';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCopy} from '@fortawesome/free-solid-svg-icons';



// библиотеки
import clipboardCopy from 'clipboard-copy';

const Generate = () => {
  const [number, setNumber] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k',
    'u', 'y', 't', 'r', 'e', 'w', 'q', 'l', '!', '@', '#', '$', '%', '^',
    '&', '*', '(', ')', '-', '_', '+', '=', 'z', 'x', 'v',
  ]);

  const [randomElement, setRandomElement] = useState(0) 
  const [errorLenght, setErrorLenght] = useState('');


  // длина пароля пользователя
  const [userNumber, setUserNumber] = useState(0)

  const usersNumber  = (event) => {
    const value = event.target.value;

    if (value < 10 || value > 20) {
      setErrorLenght("Number must be between 10 and 20");

      setUserNumber('');
    } else if (value > 9 && value <21){
      setErrorLenght("");
      setUserNumber(event.target.value)
    }
    

  }

  // генерация самого числа
  const generateBtn = () => {
    const randomLength = Number(userNumber);
    let newRandomNumber = '';
    for (let i = 0; i < randomLength; i++) {
      const randomIndex = Math.floor(Math.random() * number.length);
      newRandomNumber += number[randomIndex];
    }

    setRandomElement(newRandomNumber);    
  };

  // генереция числа через Enter
  const generateEnterBtn = (event) => {
    if(event.key === 'Enter'){
      const randomLength = Number(userNumber);
      let newRandomNumber = '';
      for (let i = 0; i < randomLength; i++) {
        const randomIndex = Math.floor(Math.random() * number.length);
        newRandomNumber += number[randomIndex];
      }
  
      setRandomElement(newRandomNumber); 
    }   
  };

  // копирование пароля

  const [iconAnimation, setIconAnimation] = useState(false);
  const copyText = () => {
    setIconAnimation(true);
    setTimeout(() => setIconAnimation(false), 500);

    clipboardCopy(randomElement)
      // .then(() => alert('Текст скопирован в буфер обмена'))
      // .catch(() => alert('Не удалось скопировать текст'));

  }

  return (
    <>
      <div className='generate__block'>
        <div className='generate__inner'>

          <div className='userPassword__block'>
            <h3>Введите длину пароля не меньше 10 и не больше 20</h3>

            
              <input
              onKeyDown={generateEnterBtn}
              className='lenght'
              type='number'
              onChange={usersNumber}
              ></input>

            <p className='errorMessage'>{errorLenght}</p>
          </div>
          
          <div className='completion'>
            <input

              className='generated'
              type=''
              value={randomElement}
            />
            <FontAwesomeIcon 
            className={iconAnimation ? 'copied__icon' : 'copy__icon'}
            onClick={copyText}
            icon={faCopy} />
          </div>


          <button className='generate__btn' onClick={generateBtn}>
            Generate
          </button>
        </div>
      </div>
    </>
  );
};

export default Generate;


import React, { Component, useState } from 'react'
import styles from '../calculator/calculator.scss'

const signs = [
  {
    sign: '+',
  },
  {
    sign: '-',
  },
  {
    sign: '*',
  },
  {
    sign: '/',
  },
]

const Calculator = ()=>{

  const [firstNum, setFirstNum] = useState('');

  const firstBlock = (event) =>{
    setFirstNum(event.target.value);
  }

  const [secondNum, setSecondNum] = useState('');
  const secondBlock = (event) =>{
    setSecondNum(event.target.value);
  }


  const [answer, setAnswer] = useState(0);

  const arithmeticActionBtn = (actionSign) =>{
      if(actionSign === '+'){
        let result = Number(firstNum) + Number(secondNum);
        setAnswer(result);
      } else if(actionSign === '-'){
        let result = Number(firstNum) - Number(secondNum);
        setAnswer(result);
      }else if(actionSign === '*'){
        let result = Number(firstNum) * Number(secondNum);
        setAnswer(result);
      }
      else if(actionSign === '/'){
        let result = Number(firstNum) / Number(secondNum);
        setAnswer(result);
      }
  }

 

    return (
      <>
        <div className='calculator__block'>
          <input 
          className='number__block' 
          placeholder='write number'
          type='number'
          value={firstNum} 
          onChange={firstBlock}></input>


          <div className='signs__block'>
            {signs.map((item, index) => (
              <button
              className='signBtn'
              key={index}
              onClick={() => arithmeticActionBtn(item.sign)}
              >{item.sign}</button>
            ))}

          </div>

          <input 
          className='number__block' 
          placeholder='write number' 
          type='number'
          value={secondNum} 
          onChange={secondBlock}></input>

          <div className='answer__block'>
              {answer}
          </div>

          
        </div>
      </>
      )
}

export default Calculator
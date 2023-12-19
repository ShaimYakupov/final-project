import React, { Component, useState } from 'react'

//styles
import styles from './graphic.module.scss'

// import component




const CreateGraphic = () =>  {

    // блок для работы с статистикой

    // data block
    const [period, setPeriod] = useState('');
    // вывод ошибки
    const [periodErrorMessage, setPeriodErrorMessage] = useState('')

    const catchPeriodValue = (event) => {
        setPeriod(event.target.value)
    }
    const dateSubmit = (event) => {
        event.preventDefault();
        const [start, end] = period.split('-').map(Number);
        
            console.log(start + '-----' + end)
        
    }

    // level block
    const [level, setLevel] = useState(0);
    let levelNumber = 0;
    const levelValue = (event) => {
        levelNumber = parseInt(event.target.value);
        setLevel(levelNumber);
        console.log(levelNumber)
    }


    return (
      <>
        <div className={styles.create__graphic__block}>

            <div className={styles.graphic__build__block}>
                
            </div>
                
            <div className={styles.graphic__statistic__block}>
                <h3 className={styles.graphic__statistic__title}>Данные для создания графиков</h3>

                <form className={styles.graphic__data} onSubmit={dateSubmit}>
                    <input 
                        type='text'
                        placeholder='write period from - to'
                        className={`${styles.input__data} ${styles.date__period__y}`}
                        value={period}
                        onChange={catchPeriodValue}
                    ></input>
                    <h4>{periodErrorMessage}</h4>

                    <input 
                        type='number'
                        placeholder='write level'
                        onChange={levelValue}
                        value={level}
                        className={`${styles.input__data} ${styles.date__period__y}`}>   
                    </input>

                    <button type='submit' className={styles.graphic__create__btn}>Create</button>
                    
                </form>

            </div>

        </div>
      </>
    )
  
}

export default CreateGraphic;

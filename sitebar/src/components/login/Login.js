import React, { Component } from 'react'

// компоненты

// дополнительные
import styles from '../login/login.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

// библиотеки
import bcrypt from 'bcryptjs';


// хуки
import { useState } from 'react';


// действие с паролем
const action = [
    {
      icon: <FontAwesomeIcon icon={faTrash} />,
      color: 'red'

    },
    {
      icon: <FontAwesomeIcon icon={faPlus} />,
      color: 'blue'
    }

]

// значение таблицы
const tableData = [
    {
        title: 'Email',
    },
    {
        title: 'Password',
    },
    {
        title: 'Хэшироаный пароль',
    },
    {
        title: 'Action',
    },
]



const Login = ()=> { 

    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('');

    


    const [rows, setRows] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    //создание пароля через btn 
    const saveBtn = () => {
        if (!inputEmail || !inputPassword) {
            setErrorMessage('Please fill in all the fields.');
        }else {
            setErrorMessage('');
            // Хэширование пароля
                const saltRounds = 5;
                bcrypt.hash(inputPassword, saltRounds, (err, hashedPassword) => {
                    if (err) {
                    console.error('Error hashing password:', err);
                    } else {
                    const newRow = { email: inputEmail, password: inputPassword, hash: hashedPassword };
                    setRows([...rows, newRow]);
                    setInputEmail('');
                    setInputPassword('');
                    }
                }); 
        }
    };

    // создание пароля через enter
    const saveEnterBtn = (event) => {
        if(event.key === "Enter"){
            if (!inputEmail || !inputPassword) {
                setErrorMessage('Please fill in all the fields.');
            }else {
                setErrorMessage('');
                // Хэширование пароля
                    const saltRounds = 5;
                    bcrypt.hash(inputPassword, saltRounds, (err, hashedPassword) => {
                        if (err) {
                        console.error('Error hashing password:', err);
                        } else {
                        const newRow = { email: inputEmail, password: inputPassword, hash: hashedPassword };
                        setRows([...rows, newRow]);
                        setInputEmail('');
                        setInputPassword('');
                        }
                    }); 
            }
        }
    };

    // удаление пароля
    const [deleteData, setDeleteData] = useState();
    const deleteBtn = (index) =>{
    setRows((prevRows) => prevRows.filter((_, rowIndex) => rowIndex !== index));
    }

    // подставление паролей
    const [addData, setAddData] = useState();

    const addBtn = (index) =>{
        console.log('clicked on +')
    }

    // обработчики кнопок
    const eventBtn = (index) => {
        if (index === 0) {
            deleteBtn(index);
        } else if (index === 1) {
            addBtn(index)
        }
      };
      

    // показывать пароль
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
        
    };

    
    
    
    
    
    return(
        <>
        <div className='auto__block'>
            <div className='auto__inner'>

                <input className='login' 
                onKeyDown={saveEnterBtn}
                type='email' 
                placeholder='e-mail'
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                ></input>
               
                <div className='password__block'>
                    <input className='login' 
                    onKeyDown={saveEnterBtn}
                    placeholder='password'
                    value={inputPassword}
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e) => setInputPassword(e.target.value)}
                    ></input>
                    <FontAwesomeIcon
                    className='showIcon'
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={togglePasswordVisibility}
                    />
                </div>
                
                <button
                onClick={saveBtn}
                className='login__btn'>Login</button>
                {errorMessage && <p className='error'>{errorMessage}</p>}

                <div className='generate'>
                    <a className='password__generate' href='/Generate'>Сгенерировать надежный пароль?</a>

                </div>
            </div>
        </div>


     {/* table */}
        <table className='table__block'>
            <tr>
                {tableData.map((list, listIndex) => (
                    <th key={listIndex} className='table__title'>
                    {list.title}
                    </th>
                ))}
            </tr>
                    
            <tbody>
                {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    <td className='table__name'>{row.email}</td>
                    <td className='table__name'>{row.password}</td>
                    <td className='table__name'>{row.hash}</td>
                    <td className='table__action'>
                        {action.map((item, index) => (
                        <h2 
                            key={index} 
                            className='action__icon' 
                            style={{color: item.color}}
                            onClick={() => eventBtn(index)}>{item.icon}</h2>
                        ))}
                    </td>
                </tr>
                    ))}
                </tbody>
        </table>
        
        
        </>
    )
}

export default Login
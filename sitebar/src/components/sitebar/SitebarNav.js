import React, { Component, useState} from 'react'
import styles from './sitebar.scss'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faBullseye} from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';




import { faArrowUp,faArrowDown } from '@fortawesome/free-solid-svg-icons';


const menu = [
    {
        title: 'Projects',
        link: '/Projects',
    },
    {
        title: 'About us',
        link: '/About',
    }
]

const sitebar__link__list = [
    {
        icon: <FontAwesomeIcon className='sitebar__list__icon' icon={faCalculator} />,
        name: 'Calculator',
        link: 'Calculator',
    },
    {
        icon: <FontAwesomeIcon className='sitebar__list__icon' icon={faComments} />,
        name: 'Chat',
        link: '/Chat',
    },
    {
        icon: <FontAwesomeIcon className='sitebar__list__icon' icon={faRectangleList} />,
        name: 'ToDoList',
        link: '/ToDoList',
    },
    {
        icon: <FontAwesomeIcon className='sitebar__list__icon' icon={faChartSimple} />,
        name: 'Graphic',
        link: '/Graphic',
    },
    {
        name: 'Import',
        link: '/Import',
        icon: <FontAwesomeIcon className='sitebar__list__icon' icon={faUpload} />
    },
    {
        name: 'Download',
        link: '/Download',
        icon: <FontAwesomeIcon className='sitebar__list__icon' icon={faDownload} />
    },
    {
        icon: <FontAwesomeIcon className='sitebar__list__icon' icon={faBullseye} />,
        name: 'Написание целей',
        link: '/Goal',
    },
    {
        icon: <FontAwesomeIcon className='sitebar__list__icon' icon={faBullseye} />,
        name: 'Slider',
        link: '/Slider',
    }
]

const sitebar__link__aboutlist = [
    {
        name: 'Our company',
        link: '/About'
    },
    {
        name: 'Our goals',
        link: '/About'
    }
]

const Nav = ()=> {
    
    const [expandedBlock, setExpandedBlock] = useState(null);

    const handleBlockClick = (idx) => {
        if (expandedBlock === idx) {
            setExpandedBlock(null); 
          } else {
            setExpandedBlock(idx); 
          }
    };


    return (
        <div>
            <div className='menu'>

                <ul>
                    {menu.map((item, idx) => (
                        <li className='sitebar__menu' key={idx}>
                            <div className='sitebar__title__block' onClick={() => handleBlockClick(idx)}>
                                <a className='sitebar__link' href={item.link}>
                                {item.title} 
                                </a>
                                <button>
                                    <FontAwesomeIcon icon={expandedBlock === idx ? faArrowDown : faArrowUp} />
                                </button>
                            </div>

                            {expandedBlock === idx && (
                                <ul>
                                    {item.title === 'Projects' && (
                                        <React.Fragment>
                                        {sitebar__link__list.map((list, listIndex) => (
                                            <li className='sitebar__list' key={listIndex}>
                                                <div className='sitebar__list__icon'>{list.icon}</div>
                                                <a className='sitebar__list__link' href={list.link}>{list.name}</a>
                                            </li>
                                        ))}
                                        </React.Fragment>
                                    )}

                                    {item.title === 'About us' && (
                                        <React.Fragment>
                                        {sitebar__link__aboutlist.map((listAbout, listIndexAbout) => (
                                            <li className='sitebar__list' key={listIndexAbout}>
                                                <a className='sitebar__list__link' href={listAbout.link}>{listAbout.name}</a>
                                            </li>
                                        ))}
                                        </React.Fragment>
                                    )}
                                </ul>
                            )}


                            
                        </li>
                    ))}
                </ul>

            </div>
        </div>
      )
}

export default Nav
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faBullseye} from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

// import projects

import styles from '../projects/projects.scss';


const projectName = [
    {
        name: 'Calculator',
        link: 'Calculator',
        icon: <FontAwesomeIcon className='projects__icon' icon={faCalculator} />
    },
    {
        name: 'Chat',
        link: '/Chat',
        icon: <FontAwesomeIcon className='projects__icon' icon={faComments} />
    },    
    {
        name: 'ToDoList',
        link: '/ToDoList',
        icon: <FontAwesomeIcon className='projects__icon' icon={faRectangleList} />
    },
    {
        name: 'Graphic',
        link: '/Graphic',
        icon: <FontAwesomeIcon className='projects__icon' icon={faChartSimple} />
    },
    {
        name: 'Import',
        link: '/Import',
        icon: <FontAwesomeIcon className='projects__icon' icon={faUpload} />
    },
    {
        name: 'Download',
        link: '/Download',
        icon: <FontAwesomeIcon className='projects__icon' icon={faDownload} />
    },
    {
        name: 'Написание целей',
        link: '/Goal',
        icon: <FontAwesomeIcon className='projects__icon' icon={faBullseye} />
    }
]
const Projects = ()=> {
    return (
            <div className='project'>
                {projectName.map((item, idx) => (
                    <div key={`projectName item {idx}`} className='project__block'>
                        <Link to={item.link} className='project__link' >{item.icon}{item.name}</Link>
                    </div>
                ))} 
            </div>
          
      )
}

export default Projects
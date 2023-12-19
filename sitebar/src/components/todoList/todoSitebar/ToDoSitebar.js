import React, { } from 'react';
import { Link } from 'react-router-dom';

// style
import styles from './todositebar.module.scss';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faStar } from '@fortawesome/free-solid-svg-icons';

const sitebar__todo__list = [
  {
    name: 'Мой день',
    icons: <FontAwesomeIcon className='todo__sitebar__icons' icon={faSun} />,
    styles: { color: 'gray' },
    link: '/CreateDoSystem'
  },
  {
    name: 'Избранное',
    icons: <FontAwesomeIcon className='todo__sitebar__icons' icon={faStar} />,
    styles: { color: 'pink' },
    link: '',
  },
];

const ToDoSitebar = () => {

  return (
    <>
        <div className={styles.todo__sitebar}>
          <div className={styles.account__block}></div>
          <div className={styles.todo__sitebar__list}>
            <ul>
              {sitebar__todo__list.map((todoItem, todoIndex) => (
                <li key={todoIndex} className={styles.todo__sitebar__list__name}>
                  <div className={styles.todo__sitebar__icons} style={todoItem.styles}>
                    {todoItem.icons}
                  </div>
                  <Link to={todoItem.link} className={styles.todo__sitebar__link}>
                    {todoItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </>
  );
}

export default ToDoSitebar;

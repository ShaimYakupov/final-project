import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// styles 
import styles from './graphic.module.scss'

const SitebarGraphicLink = [
    {
        link: 'Create Graphic',
    }
]

const SitebarGraphic = () =>  {
  
    return (
      <>
        <div className={styles.sitebar__graphic}>
            <ul>
                {SitebarGraphicLink.map((linkItem, linkIndex) => (
                    <li key={linkIndex}>
                        <Link className={styles.sitebar__graphic__links}  to={linkItem.link}>{linkItem.link}</Link>

                    </li>
                ))}
            </ul>
        </div>
        
      </>
    )
}

export default SitebarGraphic

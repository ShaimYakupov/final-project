import React, { Component } from 'react'
import { Router, Routes, Route } from 'react-router-dom'

// styles
import styles from './graphic.module.scss'

// components
import SitebarGraphic from './SitebarGraphic'
import CreateGraphic from './CreateGraphic'

const Graphic = ()=> {
    return (
        <>
          <div className={styles.graphic__main__structure}>
            <SitebarGraphic/>

            <div className={styles.rigth__block}>
              <CreateGraphic/>
              <div className={styles.graphic__main__block}>
                  <Routes>
                    <Route path='/Graphic' element={<CreateGraphic />} />
                    <Route path='/SitebarGraphic' element={<SitebarGraphic />} />
                  </Routes>
              </div>
            </div>

          </div>
        </>
      )
}

export default Graphic
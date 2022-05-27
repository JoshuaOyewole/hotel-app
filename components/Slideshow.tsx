import React from 'react'
import styles from '../styles/Slideshow.module.css'
import Booking from './Booking'


export default function Slideshow() {
  return (
    <>
      <div className={`justify-center md:justify-between items-center px-6 md:px-24 mx-auto ${styles.slideshow} flex flex-col md:flex-row`}>
        <div className={styles.text}>
          <h1 className='font-sans text-4xl font-semibold lg:text-6xl pb-2'>Comfort at its Peak</h1>
          <p className='text-center lg:text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta veniam fuga repellendus recusandae odio omnis tempore dolorem perspiciatis maiores harum.</p>
        </div>
        <Booking />
      </div>
      <div className={styles.bg_overlay}></div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, aliquid!</p>
    </>
  )
}

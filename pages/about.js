import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Styles from '../styles/about.module.css'
import Image from 'next/image'

const about = () => {
  return (
    <>
      <Navbar />
      <h1 className={Styles.h1}>Hello This is about us page.</h1>
      <Image src="/pic2.jpg" width={320} height={320}></Image>
    </>
  )
}

export default about
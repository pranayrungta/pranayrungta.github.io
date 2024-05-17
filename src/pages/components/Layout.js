import React from 'react'
import Navbar from './Navbar'
import {wrapper} from './../../styles/main.module.css'


export default function Layout({children}) {
  Object.assign(document.body.style, {
    backgroundColor : 'black',
    color :           'aqua',
    width :           '80%',
    margin :          'auto',
    fontFamily :      'Arial, Helvetica, sans-serif'
  });

  const footstyle = {flexShrink: 0,
    backgroundColor: '#05002f',
    textAlign : 'center',
    marginTop: '50px',
    padding: '10px'
  }

  return (<div className={wrapper}>
    <Navbar/>
    <div style={{flexGrow:1}}>
    {children}
    </div>
    <footer style={footstyle}>
      Thank you for visiting!
    </footer>
  </div>)
}

import React, { useEffect } from 'react'
import Navbar from './Navbar'
import './../../styles/layout.css'


export default function Layout({children}) {
  useEffect(() => {
    document.body.classList.add('bodystyle');
    return () => {
      document.body.classList.remove('bodystyle');
    }; }, []);

  return (<div id='mainwrapper'>
    <Navbar/>
    <div id='maincontent'> {children}  </div>
    <footer id='foot'>
      Thank you for visiting!
    </footer>
  </div>)
}

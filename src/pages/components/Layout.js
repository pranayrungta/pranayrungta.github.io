import React from 'react'
import Navbar from './Navbar'

function applyBackground(){
  let s = document.body.style;
  s.backgroundColor = 'black';
  s.color = 'aqua';
  s.width = '80%';
  s.margin = 'auto';
  s.fontFamily = 'Arial, Helvetica, sans-serif';
}

export default function Layout({children}) {
  applyBackground();
  return (<div>
    <Navbar/>
    {children}
    <footer>Thank you for visiting!</footer>
  </div>)
}

import React from 'react'
import { Link } from 'gatsby'
import '../../styles/nav.css'

export default function Navbar() {
  return (
    <ul id='mainmenu'>
        <li> <Link to="/"> Home </Link> </li>
        <li> Academics
            <ul className='submenu'>
                <li> <Link to="/academics/research"> Research Papers </Link> </li>
                <li> <Link to="/academics/articles"> Articles </Link> </li>
                <li> <Link to="/academics/recommend"> Recommended Books </Link> </li>
            </ul>
        </li>
        <li> <Link to="/industry"> Professional Experience </Link> </li>
        <li> <Link to="/resume"> Resume </Link> </li>
        {/* <li> <a href="/resume" target="_blank"> Resume </a> </li> */}
    </ul>
  )
}

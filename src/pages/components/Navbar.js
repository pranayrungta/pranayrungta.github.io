import React from 'react'
import { Link } from 'gatsby'
import {mainmenu, submenu} from '../../styles/nav.module.css'

export default function Navbar() {
  return (
    <nav className={mainmenu}>
    <ul>
        <li> <Link to="/"> Home </Link> </li>
        <li> Academics
            <ul className={submenu}>
                <li> <Link to="/academics/research"> Research Papers </Link> </li>
                <li> <Link to="/academics/articles"> Articles </Link> </li>
                <li> <Link to="/academics/recommend"> Recommended Math Physics Books </Link> </li>
            </ul>
        </li>
        <li> <Link to="/industry"> Professional Experience </Link> </li>
        <li> <a href="/resume" target="_blank"> Resume </a> </li>
    </ul>
    </nav>
  )
}

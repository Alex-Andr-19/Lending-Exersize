import React from 'react'
import Sandwich from '../Sandwich/Sandwich'
import './Header.css'

export default function Header() {
  return (
    <header>
        <Sandwich/>
        <img src='logotype.svg' width='10%'/>
        <img src='search_img.png' width='14px'/>
    </header>
  )
}
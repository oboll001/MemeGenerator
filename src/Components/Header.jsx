import React from 'react'
import trollFace from '../assets/troll-face.png'
import '../App.css'

export default function Header(){
    return(
        <header className="header--card">
            <img src= {trollFace} className= "troll"/>
            <h2 className= "header--title">Meme Generator</h2>
            <h3 className="header--info">Project 3 - React Course</h3>
        </header>
    )
}
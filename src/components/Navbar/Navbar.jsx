import React from 'react'
import "./navbar.css"
import {RiLoginCircleFill} from "react-icons/ri";
import { MdNightlightRound, MdWbSunny } from "react-icons/md";
import { useTheme } from '../../context';

const Navbar = () => {
    const {theme,setTheme} = useTheme();
  return (
    <nav className={theme === "dark"? "nav-container white-border dark":"nav-container light"}>
      <div className="logo">
        <img className="logo-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Pandion_haliaetus_-San_Francisco_Bay%2C_California%2C_USA-head-8_%282%29.jpg/330px-Pandion_haliaetus_-San_Francisco_Bay%2C_California%2C_USA-head-8_%282%29.jpg" alt="" />
        <h1 className="logo-text">OspreyQuiz</h1>
      </div>
    <div className="logo ">
      <RiLoginCircleFill className='theme-icon' />
      {theme === "dark" ? (
        <MdWbSunny onClick={() => setTheme("light")} className="theme-icon" />
      ) : (
        <MdNightlightRound
          onClick={() => setTheme("dark")}
          className="theme-icon"
        />
      )}
    </div>
  </nav>
  )
}

export default Navbar

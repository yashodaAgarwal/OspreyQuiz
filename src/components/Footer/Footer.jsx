import React from 'react'
import "./footer.css"
import {RiGithubFill,RiTwitterFill} from "react-icons/ri";
import { useTheme } from '../../context';

export default function Footer() {
    const {theme} = useTheme();
  return (
    <div className={theme === "dark"? "footer-container white-footer-border dark":"footer-container light"}>
    <h3 className='footer-text'>Made with ❤️ by <strong>Yashoda Agarwal</strong></h3>
    <div className='icons'>
      <RiGithubFill className='theme-icon' />
      <RiTwitterFill className='theme-icon' />
    </div>
    </div>
  )
}

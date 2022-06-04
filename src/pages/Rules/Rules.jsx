import React from 'react'
import "./rules.css"
import { useTheme } from "../../context";
import { Footer, Navbar } from "../../components";

const Rules = () => {
    const {theme} = useTheme();
  return (
         <>
      <Navbar />
      <div
        className={
          theme === "dark"
            ? "homepage-container  dark"
            : "homepage-container light"
        }
      >
          <div className={theme ==='dark'?'rules-page border':'rules-page dark-border'}>
         <h1 className='rules-heading'>Rules</h1>
         <ul className='rules'>
             <li>This quiz consists of 5 multiple-choice questions.</li>
             <li>Points will be awarded : 2 points for each right answer.</li>
             <li>Each multiple choice question has only one correct answer.</li>
             <li>To start, click the Start Quiz button. When finished, click the Submit button.</li>
         </ul>
         <div>
             <button className={theme === "dark"?'rules-button light':'rules-button dark'}>Start Quiz</button>
         </div>
         </div>
        <Footer />
      </div>
    </>
  )
}

export default Rules

import { useCategory, useTheme } from "../../context";
import { Footer, Navbar, Question } from "../../components";
import "./quiz.css";
import { useEffect } from "react";
import { CircularProgress } from "@material-ui/core";

const Quiz = () => {
  const { theme } = useTheme();
  const {category,categoryName,score, setScore,questions,setQuestions,currQues, setCurrQues} = useCategory();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    (async () => {
      
        const getData = await fetch(`https://opentdb.com/api.php?amount=6${category && `&category=${category}`}&difficulty=medium&type=multiple`)
        .then(
          getData=>getData.json()
        )
        setQuestions(getData.results)
    })();
    // eslint-disable-next-line
  }, [category]);
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
         <div className="quiz">
      <span className="subtitle">Welcome</span>

      {questions ? (
        <>
          <div className="quizInfo">
            <span className="CategoryInfo">{categoryName}</span>
            <span className="ScoreInfo">
              Score : {score }
            </span>
          </div>
          
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
        <Footer />
      </div>
    </>
  );
};

export default Quiz;

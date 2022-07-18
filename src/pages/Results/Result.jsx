import { useCategory, useTheme } from "../../context";
import { Navbar } from "../../components";
import { Button } from "@material-ui/core";
import "./result.css";
import { Link} from "react-router-dom";
import { useEffect } from "react";

const Result = () => {
  const { theme } = useTheme();
  const { score, questions,setQuestions,setCurrQues,setScore } = useCategory();

  const refresh = ()=>{
    setCurrQues(0);
    setQuestions();
    setScore(0);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <>
      <Navbar />
      <div
        className={
          theme === "dark"
            ? "homepage-container result dark"
            : "homepage-container result light"
        }
      >
        {" "}
        <span className="title">Final Score : {score}</span>
        <Link to="/">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{ alignSelf: "center", marginTop: 20, marginBottom: 20 }}
          onClick={refresh}
        >
          Go to homepage
        </Button>
        </Link>
       
        <span className="title">Answers:</span>
        {questions.map((question) => (
          <>
            <div className="singleQuestion singleResult">
              <div>{question.question}</div>
              <div className="options">
                {question.incorrect_answers.map((i) => (
                  <button className={`singleOption `} key={i}>
                    {i}
                  </button>
                ))}
                <button className={`singleOption select`}>
                  {question.correct_answer}
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Result;

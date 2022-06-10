import { useCategory, useTheme } from "../../context";
import { Footer, Navbar } from "../../components";
import { Button } from "@material-ui/core";
import "./result.css";

const Result = () => {
  const { theme } = useTheme();
  const { score, questions } = useCategory();

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
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{ alignSelf: "center", marginTop: 20, marginBottom: 20 }}
          href="/"
        >
          Go to homepage
        </Button>
        <span className="title">Answers:</span>
        {questions.map((question) => (
          <>
            <div className="singleQuestion">
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

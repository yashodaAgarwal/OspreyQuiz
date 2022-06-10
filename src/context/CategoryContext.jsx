
import { createContext, useContext, useReducer, useState } from "react";
import categoryReducer from "../reducer/categoryReducer";

const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
  const [State, Dispatch] = useReducer(categoryReducer, {
    categorydata: [],
    userData:[],
  });
  const [category,setCategory] = useState();
  const [categoryName,setCategoryName] = useState();
  const [score, setScore] = useState(0);
  const [questions,setQuestions] = useState();
  const [currQues, setCurrQues] = useState(0);
  const [options,setOptions] = useState()
  return (
    <CategoryContext.Provider value={{ State, Dispatch,category,setCategory,categoryName,setCategoryName,score, setScore,questions,setQuestions,currQues, setCurrQues,options,setOptions }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };
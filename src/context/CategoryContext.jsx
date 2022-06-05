
import { createContext, useContext, useReducer } from "react";
import categoryReducer from "../reducer/categoryReducer";

const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
  const [State, Dispatch] = useReducer(categoryReducer, {
    categorydata: [],
    userData:[]
  });
  return (
    <CategoryContext.Provider value={{ State, Dispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };

import { createContext, useContext, useReducer } from "react";
import categoryReducer from "../reducer/categoryReducer";

const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
  const [CategoryState, categoryDispatch] = useReducer(categoryReducer, {
    categorydata: [],
  });
  return (
    <CategoryContext.Provider value={{ CategoryState, categoryDispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };
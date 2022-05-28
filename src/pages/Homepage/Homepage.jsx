import React,{useEffect} from 'react'
import "./homepage.css"
import axios from "axios"
import { useCategory, useTheme } from '../../context';
import { CategoryCard, Footer } from '../../components';

const Homepage = () => {
   const {theme} = useTheme();
   const {CategoryState, categoryDispatch } = useCategory();
   useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        console.log(response)
        categoryDispatch({ type: "savedata", payload: response.data.categories });
      } catch (error) {
        console.log(error, "Could not load data");
      }
    })();
  }, [categoryDispatch]);
  console.log()
  return (
    <div className={theme === "dark"?'homepage-container dark': "homepage-container light"}>
      <h1 className='Homepage-title'>Featured Categories</h1>
      <div className='category-container'>
      {CategoryState.categorydata.map((category)=>(
        <CategoryCard category={category}/>
      )
      )}
    </div>
    <Footer/>
    </div>
  )
}

export default Homepage

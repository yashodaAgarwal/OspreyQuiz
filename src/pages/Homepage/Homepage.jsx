import React, { useEffect } from "react";
import "./homepage.css";
import axios from "axios";
import { useCategory, useTheme } from "../../context";
import { CategoryCard, Footer, Navbar } from "../../components";

const Homepage = () => {
  const { theme } = useTheme();
  const { State, Dispatch } = useCategory();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        Dispatch({
          type: "savedata",
          payload: response.data.categories,
        });
      } catch (error) {
        console.log(error, "Could not load data");
      }
    })();
  }, [Dispatch]);
  
  return (
    <>
      <Navbar />
      <div
        className={
          theme === "dark"
            ? "homepage-container dark"
            : "homepage-container light"
        }
      >
        <h1 className="Homepage-title">Featured Categories</h1>
        <div className="category-container">
          {State.categorydata.map((category) => (
            <CategoryCard category={category} key={category._id} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;

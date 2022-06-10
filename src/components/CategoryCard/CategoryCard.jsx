import React from "react";
import { Link } from "react-router-dom";
import { useCategory } from "../../context";
import "./categorycard.css";

const CategoryCard = ({ category }) => {
  const { setCategory, setCategoryName } = useCategory();
  const { categoryName, image, value } = category;
  return (
    <section>
      <Link to="/rules">
        <img
          className="image"
          src={image}
          alt={categoryName}
          onClick={() => {
            return (setCategory(value), setCategoryName(categoryName)
  )}}
        />
      </Link>
      <p className="text">{categoryName}</p>
    </section>
  );
};

export default CategoryCard;

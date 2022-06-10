import React from 'react'
import { Link } from 'react-router-dom'
import "./categorycard.css"

const CategoryCard = ({category}) => {
  const {categoryName,image} = category
  return (
    <section>
      <Link to="/rules"><img className="image" src={image} alt={categoryName} /></Link>
      <p className="text">{categoryName}</p>
  </section>
  )
}

export default CategoryCard

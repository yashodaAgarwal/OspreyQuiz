import React from 'react'
import "./categorycard.css"

const CategoryCard = ({category}) => {
  const {categoryName,image} = category
  return (
    <section>
      <img className="image" src={image} alt={categoryName} />
      <p className="text">{categoryName}</p>
  </section>
  )
}

export default CategoryCard

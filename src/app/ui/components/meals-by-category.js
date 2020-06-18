import React from 'react';
import { useSelector } from 'react-redux';
import { getMealsByCategory } from '../../state/recipes/recipes.selectors';

export const MealsByCategory = ({
  category,
}) => {

  const meals = useSelector(getMealsByCategory(category));

  return (
    <>
      {
        meals.map(({ id, title }) => (
          <p key={id}>{title}</p>
        ))
      }
    </>
  )
}
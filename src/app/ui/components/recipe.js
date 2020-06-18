import React from 'react';
import { useSelector } from 'react-redux';
import { getMealById } from './../../state/recipes/recipes.selectors';
import { IngredientsList } from './ingredients-list';

export const Recipe = ({
  id,
}) => {
  const recipe = useSelector(getMealById(id));
  return (
    <>
      { recipe?.ingredients && <IngredientsList ingredients={recipe.ingredients} />}
    </>
  )
}
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onCategoriesRequested } from './../../state/recipes/recipes.actions';

export const RecipesScreen = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(onCategoriesRequested())
  });

  return (
    <p>Recipes</p>
  )
}
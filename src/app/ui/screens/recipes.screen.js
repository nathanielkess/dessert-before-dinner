import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onCategoriesRequested } from './../../state/recipes/recipes.actions';
import { CategoriesList } from './../components/categories-list';
import { pluckCategories } from './../../state/recipes/recipes.selectors';

export const RecipesScreen = () => {
  const dispatch = useDispatch()
  const categories = useSelector(pluckCategories);
  const [selectedCategoryId, setSelectedCategoryId] = useState();

  useEffect(() => {
    dispatch(onCategoriesRequested())
  }, []);

  return (
    <CategoriesList 
      categories={categories} 
      selectedId={selectedCategoryId} 
      onSelected={setSelectedCategoryId} 
    />
  )
}
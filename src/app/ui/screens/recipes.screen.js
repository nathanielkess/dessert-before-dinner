import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onCategoriesRequested, onMealsRequested } from './../../state/recipes/recipes.actions';
import { CategoriesList } from './../components/categories-list';
import { pluckCategories } from './../../state/recipes/recipes.selectors';

export const RecipesScreen = () => {
  const dispatch = useDispatch()
  const categories = useSelector(pluckCategories);
  const [selectedCategoryName, setSelectedCategoryName] = useState();

  useEffect(() => {
    dispatch(onCategoriesRequested())
  }, []);

  const handleOnCategorySelected = (categoryName) => {
    setSelectedCategoryName(categoryName)
    dispatch(onMealsRequested(categoryName));
  }

  return (
    <CategoriesList 
      categories={categories} 
      selectedCategory={selectedCategoryName} 
      onSelected={handleOnCategorySelected} 
    />
  )
}
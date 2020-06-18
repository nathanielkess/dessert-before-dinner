import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onCategoriesRequested, onMealsRequested, onRecipeRequested } from './../../state/recipes/recipes.actions';
import { CategoriesList } from './../components/categories-list';
import { pluckCategories } from './../../state/recipes/recipes.selectors';
import { MealsByCategory } from './../components/meals-by-category';
import { Recipe } from './../components/recipe';

export const RecipesScreen = () => {
  const dispatch = useDispatch()
  const categories = useSelector(pluckCategories);
  const [selectedCategoryName, setSelectedCategoryName] = useState();
  const [selectedMealId, setSelectedMealId] = useState();

  useEffect(() => {
    dispatch(onCategoriesRequested())
  }, []);

  const handleOnCategorySelected = (categoryName) => {
    setSelectedCategoryName(categoryName)
    dispatch(onMealsRequested(categoryName));
  }

  const handleMealSelected = (mealId) => {
    setSelectedMealId(mealId);
    dispatch(onRecipeRequested(mealId));
  }

  return (
    <div className="mx-auto max-w-4xl">
      <CategoriesList 
        categories={categories} 
        selectedCategory={selectedCategoryName} 
        onSelected={handleOnCategorySelected} 
      />
      <MealsByCategory onMealSelected={handleMealSelected} category={selectedCategoryName} />
      <Recipe id={selectedMealId} />
    </div>
  )
}
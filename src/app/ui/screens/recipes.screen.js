import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onCategoriesRequested, onMealsRequested, onRecipeRequested } from './../../state/recipes/recipes.actions';
import { CategoriesList } from './../components/categories-list';
import { pluckCategories } from './../../state/recipes/recipes.selectors';
import { MealsByCategory } from './../components/meals-by-category';
import { Recipe } from './../components/recipe';
import { Modal } from '../../../design-system/components';

export const RecipesScreen = ({
  className = ''
}) => {
  const dispatch = useDispatch()
  const categories = useSelector(pluckCategories);
  const [selectedCategoryName, setSelectedCategoryName] = useState();
  const [selectedMealId, setSelectedMealId] = useState();
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);

  useEffect(() => {
    dispatch(onCategoriesRequested())
  }, []);

  const handleOnCategorySelected = (categoryName) => {
    setSelectedCategoryName(categoryName)
    dispatch(onMealsRequested(categoryName));
  }

  const handleMealSelected = (mealId) => {
    dispatch(onRecipeRequested(mealId));
    setSelectedMealId(mealId);
    setIsRecipeModalOpen(true);
  }

  const closeRecipeModal = () => {
    setIsRecipeModalOpen(false);
  }

  return (
    <div className={`mx-auto max-w-4xl ${className}`}>
      <CategoriesList 
        categories={categories} 
        selectedCategory={selectedCategoryName} 
        onSelected={handleOnCategorySelected} 
      />
      <MealsByCategory onMealSelected={handleMealSelected} category={selectedCategoryName} />
      {
        isRecipeModalOpen && (
          <Modal onClose={closeRecipeModal}>
            <Recipe id={selectedMealId} />
          </Modal>
        )
      }
    </div>
  )
}
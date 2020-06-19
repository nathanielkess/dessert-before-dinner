import React from 'react';
import { useSelector } from 'react-redux';
import { getMealById } from './../../state/recipes/recipes.selectors';
import { IngredientsList } from './ingredients-list';
import { ImageBox } from '../../../design-system/components';
import { InstructionSteps } from './instruction-steps';

export const Recipe = ({
  id,
}) => {
  const recipe = useSelector(getMealById(id));
  return (
    <div className="flex flex-col items-center">
      <h2 className="heading-1 text-blue-m">{recipe.title}</h2>
      <ImageBox src={recipe.thumb} alt={recipe.title} className="mt-6" />
      { recipe?.ingredients && <IngredientsList ingredients={recipe.ingredients} className="mt-8 max-w-2xl" />}
      { recipe?.instructions && <InstructionSteps steps={recipe.instructions} className="mt-8 max-w-md" />}
    </div>
  )
}
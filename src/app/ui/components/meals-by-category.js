import React from 'react';
import { useSelector } from 'react-redux';
import { getMealsByCategory } from '../../state/recipes/recipes.selectors';
import { FigureCardVertical } from './../../../design-system/components'
import { Clickable } from './clickable';

export const MealsByCategory = ({
  category,
  onMealSelected = () => {},
}) => {

  const meals = useSelector(getMealsByCategory(category));
  const handleClick = (mealId) => () => onMealSelected(mealId); 

  return (
    <div className="flex justify-center mt-16">
      { category && (
        <div className="twoUpGrid">
          {
            meals.map(({ id, title, thumb }) => (
              <Clickable key={id} onClick={handleClick(id)}>
                <FigureCardVertical title={title} src={thumb} alt={`photograph of ${title}`} />
              </Clickable>
            ))
          }
        </div>
      )}
    </div>
  )
}
import React, { useState } from 'react';
import { PillToggle } from './../../../design-system/components'

export const IngredientsList = ({
  className,
  ingredients = [],
}) => {

  const [ingredientItems, setIngredientItems] = useState(ingredients.reduce((a, ingredient, i) => ({
    ...a,
    [i]: { id: i, title: ingredient, checked: false}
  }), {}));

  const toggleIngredient = (id) => () => {
    setIngredientItems({
      ...ingredientItems,
      [id]: { ...ingredientItems[id], checked: !ingredientItems[id].checked}
    })
  }

  return (
    <div className={`flex flex-row flex-wrap justify-center ${className}`}>
      {
        Object.values(ingredientItems).map(ingredient => (
          <PillToggle 
            key={ingredient.id} 
            onClick={toggleIngredient(ingredient.id)} 
            on={ingredient.checked} 
            className="mx-2 my-2"
            >
              {ingredient.title}
            </PillToggle>
        ))
      }
    </div>
  )
}
import React from 'react';
import { PillToggle } from './../../../design-system/components'

export const IngredientsList = ({
  ingredients = [],
}) => {
  return (
    <>
      {
        ingredients.map((ingredient) => (
          <PillToggle key={ingredient}>{ingredient}</PillToggle>
        ))
      }
    </>
  )
}
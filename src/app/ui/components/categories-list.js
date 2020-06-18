import React from 'react';
import { PillButton } from '../../../design-system/components'

export const CategoriesList = ({
  onSelected = () => {},
  selectedCategory,
  categories,
}) => {
  const handleClick = (categoryName) => () => onSelected(categoryName);
  return (
    <>
      {
        categories.map(({id, name}) => (
          <PillButton 
            onClick={handleClick(name)}
            key={id}
            on={selectedCategory === name}
          >
            {name}
          </PillButton>
        ))
      }
    </>
  )
}
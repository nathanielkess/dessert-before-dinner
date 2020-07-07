import React, { useCallback } from 'react';
import { PillButton } from '../../../design-system/components'

export const CategoriesList = ({
  onSelected = () => {},
  selectedCategory,
  categories,
}) => {
  const handleClick = useCallback((categoryName) => { onSelected(categoryName) }, [categories]);
  return (
    <nav className="flex flex-row flex-wrap justify-center">
        {
          categories.map(({id, name}) => (
            <PillButton 
              onClick={handleClick}
              onClickValue={name}
              key={id}
              on={selectedCategory === name}
              className="mx-2 my-2"
            >
              {name}
            </PillButton>
          ))
        }
    </nav>
  )
}
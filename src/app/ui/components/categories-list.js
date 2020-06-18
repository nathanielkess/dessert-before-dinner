import React from 'react';
import { PillButton } from '../../../design-system/components'

export const CategoriesList = ({
  onSelected = () => {},
  selectedId,
  categories,
}) => {
  const handleClick = (id) => () => onSelected(id);
  return (
    <>
      {
        categories.map(({id, name}) => (
          <PillButton 
            onClick={handleClick(id)}
            key={id}
            on={selectedId === id}
          >
            {name}
          </PillButton>
        ))
      }
    </>
  )
}
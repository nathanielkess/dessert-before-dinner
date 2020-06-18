import { createSelector } from 'reselect'
import { compose, filter, propEq, values, prop } from 'ramda';

export const pluckCategories = state => state.categories
export const pluckMeals = state => state.meals

export const getMealsByCategory = (category) => createSelector(
  [pluckMeals],
  compose(
    values,
    filter(propEq('category', category))
  )
);

export const getMealById = (id) => createSelector(
  [pluckMeals],
  prop(id)
)
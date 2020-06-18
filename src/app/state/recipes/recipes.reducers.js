import { CATEGORIES_SUCCEEDED, MEALS_SUCCEEDED } from "./recipes.actions";


const categories = (state = [], { type, payload }) => {
  switch (type)  {
    case CATEGORIES_SUCCEEDED:
      return [
        ...state,
        ...payload.categories,
      ]
    default:
      return state
  }
}

const meals = (state = {}, { type, payload }) => {
  switch (type)  {
    case MEALS_SUCCEEDED:
      return {
        ...state,
        ...payload.recipes
      }
    default:
      return state
  }
}

export const recipesReducers = {
  categories,
  meals,
}
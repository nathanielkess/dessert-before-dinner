import { CATEGORIES_SUCCEEDED, MEALS_SUCCEEDED, RECIPE_SUCCEEDED } from "./recipes.actions";


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
    case RECIPE_SUCCEEDED:
      return {
        ...state,
        [payload.recipe.id]: {
          ...state[payload.recipe.id],
          ingredients: payload.recipe.ingredients,
          instructions: payload.recipe.instructions,
        }
      }
    default:
      return state
  }
}

export const recipesReducers = {
  categories,
  meals,
}
import { CATEGORIES_SUCCEEDED } from "./recipes.actions";


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

export const recipesReducers = {
  categories,
}
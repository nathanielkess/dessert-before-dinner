
import { transformCategories } from './transformers/categories.transform'
import { transformRecipes } from './transformers/recipes.transform'

const toJSON = (r) => r.json() 

export const getCategories = () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then(toJSON)
  .then(transformCategories)

  export const getRecipesByCategoryName = (name) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
  .then(toJSON)
  .then(transformRecipes(name))
  
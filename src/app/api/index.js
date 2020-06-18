
import { transformCategories } from './transformers/categories.transform'

const toJSON = (r) => r.json() 

export const getCategories = () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then(toJSON)
  .then(transformCategories)
  
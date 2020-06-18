import { compose, prop, head, not, isEmpty, isNil } from 'ramda';

const notEmptyString = str => not(isEmpty(str)) && not(isNil(str))

const ingredientsToArray = recipe => {
  let ingredients = [];
  const rest = Object.keys(recipe)
    .reduce((a, key) => {
      if (key.match(/Ingredient/g)){
        ingredients = [ ...ingredients, recipe[key]];
        return a;
      }
      return { ...a, [key]: recipe[key] }
    }, {})
  return {
    ...rest,
    ingredients: ingredients.filter(notEmptyString),
  }
}

const instructionsToArray = ({strInstructions, ...rest}) => ({
  instructions: strInstructions.split('\r\n\r\n'),
  ...rest,
})

export const transformRecipe = compose(
  ({ instructions, ingredients, idMeal }) => ({instructions, ingredients, id: idMeal}),
  instructionsToArray,
  ingredientsToArray,
  head,
  prop('meals')
)
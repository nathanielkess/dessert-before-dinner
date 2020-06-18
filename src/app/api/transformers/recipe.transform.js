import { compose, prop, head, not, isEmpty, props } from 'ramda';

const notEmptyString = str => not(isEmpty(str));

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

export const transformRecipe = (payload) => {
  const rtn = compose(
    ({ instructions, ingredients, idMeal }) => ({instructions, ingredients, id: idMeal}),
    instructionsToArray,
    ingredientsToArray,
    head,
    prop('meals')
  )(payload);
  return rtn;
}
 
export const transformRecipes = (payload) => payload.meals
 .map(meal => ({
   id: meal.idMeal,
   title: meal.strMeal,
   thumb: meal.strMealThumb,
 }))
 .reduce((a,c) => ({
   ...a,
   [c.id]: { ...c }
 }), {})
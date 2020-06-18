 
export const transformRecipes = (category) => (payload) => payload.meals
 .map(meal => ({
   id: meal.idMeal,
   title: meal.strMeal,
   thumb: meal.strMealThumb,
   category,
 }))
 .reduce((a,c) => ({
   ...a,
   [c.id]: { ...c }
 }), {})
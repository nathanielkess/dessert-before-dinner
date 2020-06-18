
export const CATEGORIES_REQUESTED = 'CATEGORIES_REQUESTED'
export const CATEGORIES_SUCCEEDED = 'CATEGORIES_SUCCEEDED'
export const MEALS_REQUESTED = 'MEALS_REQUESTED'
export const MEALS_SUCCEEDED = 'MEALS_SUCCEEDED'
export const RECIPE_REQUESTED = 'RECIPE_REQUESTED'
export const RECIPE_SUCCEEDED = 'RECIPE_SUCCEEDED'

export const onCategoriesRequested = () => ({ type: CATEGORIES_REQUESTED })
export const onCategoriesSucceeded = (categories) => ({ type: CATEGORIES_SUCCEEDED, payload: { categories } })

export const onMealsRequested = (categoryName) => ({ type: MEALS_REQUESTED, payload: { categoryName }})
export const onMealsSucceeded = (recipes) => ({ type: MEALS_SUCCEEDED, payload: { recipes }})

export const onRecipeRequested = (recipeId) => ({ type: RECIPE_REQUESTED, payload: { recipeId }})
export const onRecipeSucceeded = (recipe) => ({ type: RECIPE_SUCCEEDED, payload: { recipe }})
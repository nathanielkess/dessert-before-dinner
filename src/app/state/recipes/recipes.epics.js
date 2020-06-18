import { map, switchMap, tap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { CATEGORIES_REQUESTED, onCategoriesSucceeded, MEALS_REQUESTED, onMealsSucceeded, RECIPE_SUCCEEDED, RECIPE_REQUESTED, onRecipeSucceeded } from './recipes.actions'
import { getCategories, getRecipesByCategoryName, getRecipeById } from '../../api';

const categoriesSucceeded = (action$) => action$.pipe(
  ofType(CATEGORIES_REQUESTED),
  switchMap(() => getCategories()),
  map(onCategoriesSucceeded),
)

const mealsSucceeded = (action$) => action$.pipe(
  ofType(MEALS_REQUESTED),
  map(({ payload }) => payload.categoryName),
  switchMap(getRecipesByCategoryName),
  map(onMealsSucceeded),
)

const recipeSucceeded = (action$) => action$.pipe(
  ofType(RECIPE_REQUESTED),
  map(({ payload }) => payload.recipeId),
  switchMap(getRecipeById),
  map(onRecipeSucceeded),
)

export const recipesEpics = [
  categoriesSucceeded,
  mealsSucceeded,
  recipeSucceeded,
]
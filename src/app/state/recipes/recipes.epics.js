import { map, switchMap, tap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { CATEGORIES_REQUESTED, onCategoriesSucceeded, MEALS_REQUESTED, onMealsSucceeded } from './recipes.actions'
import { getCategories, getRecipesByCategoryName } from '../../api';

const categoriesSucceeded = (action$) => action$.pipe(
  ofType(CATEGORIES_REQUESTED),
  switchMap(() => getCategories()),
  map(onCategoriesSucceeded),
)

const recipesSucceeded = (action$) => action$.pipe(
  ofType(MEALS_REQUESTED),
  map(({ payload }) => payload.categoryName),
  switchMap(getRecipesByCategoryName),
  map(onMealsSucceeded),
)

export const recipesEpics = [
  categoriesSucceeded,
  recipesSucceeded
]
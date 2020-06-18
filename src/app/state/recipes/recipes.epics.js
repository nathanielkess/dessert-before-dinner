import { map, switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { CATEGORIES_REQUESTED, onCategoriesSucceeded } from './recipes.actions'
import { getCategories } from '../../api';

const categoriesSucceeded = (action$) => action$.pipe(
  ofType(CATEGORIES_REQUESTED),
  switchMap(() => getCategories()),
  map(onCategoriesSucceeded),
)

export const recipesEpics = [
  categoriesSucceeded
]
import { filter, map, switchMap, tap, withLatestFrom, debounceTime, takeUntil, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { CATEGORIES_REQUESTED, onCategoriesSucceeded } from './recipes.actions'

const categoriesSucceeded = (action$) => action$.pipe(
  ofType(CATEGORIES_REQUESTED),
  map(onCategoriesSucceeded)
)

export const recipesEpics = [
  categoriesSucceeded
]
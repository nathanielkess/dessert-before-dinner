import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { recipesReducers } from './recipes/recipes.reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true,
});

const rootReducer = combineReducers({
  ...recipesReducers
})

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(
    logger,
  )),
)
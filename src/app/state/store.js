import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { recipesReducers } from './recipes/recipes.reducers';
import { recipesEpics } from './recipes/recipes.epics';
import { createLogger } from 'redux-logger';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(
  ...recipesEpics,
);

const logger = createLogger({
  collapsed: true,
});

const rootReducer = combineReducers({
  ...recipesReducers
})

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(
    epicMiddleware,
    logger,
  )),
)

epicMiddleware.run(rootEpic);
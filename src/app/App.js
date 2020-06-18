import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state/store';

import { RecipesScreen } from './ui/screens/recipes.screen';

export const App = () => {
  return (
    <Provider store={store}>
      <RecipesScreen />
    </Provider>
  )
}

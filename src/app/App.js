import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state/store';

import { RecipesScreen } from './ui/screens/recipes.screen';
import { AppHeader } from './ui/components/app-header';

export const App = () => {
  return (
    <Provider store={store}>
      <AppHeader />
      <RecipesScreen />
    </Provider>
  )
}

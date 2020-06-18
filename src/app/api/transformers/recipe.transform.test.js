import { mockRecipe } from './mock-recipe'
import { transformRecipe } from './recipe.transform';

describe('transformRecipe()', () => {
  const result = transformRecipe(mockRecipe);
  it('should return an object with a list of ingredients', () => {
    expect(result.ingredients).toEqual(expect.arrayContaining([
      'Fennel', 
      'Parsley'
    ]));
  });
  it('should return a instructions as an array', () => {
    expect(result.instructions.length).toEqual(2)
  })
})
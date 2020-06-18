import { getMealsByCategory } from './recipes.selectors';

describe('getMealsByCategory()', () => {
  describe('when meals are available', () => {
    const state = {
      meals: {
        1: { category: 'beef', title: 'beef stew' },
        2: { category: 'beef', title: 'beef plate' },
        3: { category: 'pasta', title: 'spaghetti' },
      }
    }
    const result = getMealsByCategory('beef')(state);
    it('should return a list of meals filtered by category', () => {
      expect(result).toEqual(expect.arrayContaining([
        { category: 'beef', title: 'beef stew' },
        { category: 'beef', title: 'beef plate' },
      ]));
    });
    it('should not include items from another category', () => {
      expect(result).toEqual(expect.not.arrayContaining([
        { category: 'pasta', title: 'spaghetti' }
      ]))
    })
  })
})
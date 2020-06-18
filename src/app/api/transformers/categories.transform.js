

export const transformCategories = (payload) => payload.categories.map(category => ({
  id: category.idCategory,
  name: category.strCategory,
}));
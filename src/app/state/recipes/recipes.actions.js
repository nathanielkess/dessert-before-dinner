
export const CATEGORIES_REQUESTED = 'CATEGORIES_REQUESTED';
export const CATEGORIES_SUCCEEDED = 'CATEGORIES_SUCCEEDED';

export const onCategoriesRequested = () => ({ type: CATEGORIES_REQUESTED });
export const onCategoriesSucceeded = (categories) => ({ type: CATEGORIES_SUCCEEDED, payload: { categories } });
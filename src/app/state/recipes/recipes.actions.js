
const CATEGORIES_REQUESTED = 'CATEGORIES_REQUESTED';
const CATEGORIES_SUCCEEDED = 'CATEGORIES_SUCCEEDED';

export const onCategoriesRequested = () => ({ type: CATEGORIES_REQUESTED });
export const onCategoriesSucceeded = () => ({ type: CATEGORIES_SUCCEEDED });
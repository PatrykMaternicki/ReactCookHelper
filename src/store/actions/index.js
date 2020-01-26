export const isOpen = (value) => 
({
  type: 'OPEN',
  value
});

export const isClose = (value) => ({
  type: 'CLOSE',
  value
});

export const setRecipe = (recipe) => ({
  type: 'SET_RECIPE',
  recipe
});
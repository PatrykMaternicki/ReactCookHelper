import RecipeService from "../../services/recipe-service";

const recipeService = new RecipeService();

export function recipe( state = [], action) {
  console.log(state);
  switch(action.type) {
    case 'SET_RECIPE': recipeService.create(action.recipe); return recipeService.getRecipes();
    case 'UPDATE_RECIPE': return false;
    case 'REMOVE_RECIPE': return false;
    default: return recipeService.getRecipes();
  }
}
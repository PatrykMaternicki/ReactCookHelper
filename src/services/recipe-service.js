import Recipe from '../models/Recipe';

export default class RecipeService {
  constructor() {
    this.localStorage = window.localStorage;
    this.recipes = [];
    this.basicKey = '';
    this.load();
  }

  create(data) {
    let key = this.generateBasicKey(data.recipe);
    this.save(data, key);
    this.setRecipe(data, key);
  }

  generateBasicKey(key) {
    let hash = Math.random().toString(36).substring(7);
    return `${key}--${hash}`;
  }

  save(data, key) {
    for(const prop in data) {
      this.localStorage.setItem(`${key}--${prop}`, data[prop]);
    }
  }

  load() {
    for(let i = 0; i < this.localStorage.length; i++) {
      this.basicKey = this.getBasicKey(this.localStorage.key(i));
      this.setObjectToArray(this.localStorage.key(i));
    }
  }

  isInArray(prop) {
    return this.recipes.findIndex(recipe => recipe.id === this.basicKey) > -1;
  }

  getBasicKey(prop) {
    let keys = prop.split("--");
    return `${keys[0]}--${keys[1]}`;
  }

  getField(prop) {
    return prop.split("--")[2];
  }

  setObjectToArray(key) {
    let index = this.recipes.findIndex(recipe => recipe.id === this.basicKey);
    if(index === -1) {
      this.recipes.push(new Recipe(this.basicKey));
      index = this.recipes.findIndex(recipe => recipe.id === this.basicKey);
    }
    let field = this.getField(key);
    let findObject = this.recipes[index];
    for(const prop in findObject) {
      if(prop === field) {
        findObject[prop] = this.localStorage.getItem(key);
      }
    }
  }

  setRecipe(data, key) {
    let recipe = new Recipe(this.basicKey);
    recipe.url = data.url;
    recipe.recipe = data.recipe;
    recipe.category = data.category;
    recipe.kitchen = data.kitchen;
    this.recipes.push(recipe);
  }

  getRecipes() {
    return this.recipes;
  }
}
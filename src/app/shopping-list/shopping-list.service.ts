import { Ingredients } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients('Apples', 4),
    new Ingredients('Tomatoes', 4),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredient(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}

import { Ingredients } from '../shared/ingredients.model';

import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredients[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredients[] = [
    new Ingredients('Apples', 4),
    new Ingredients('Tomatoes', 4),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredient(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredients) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}

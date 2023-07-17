import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredients[];

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientChanged.subscribe((ingredients: Ingredients[]) => {
      console.log(ingredients, '123');
      console.log('23213', this.ingredients);
      this.ingredients = ingredients;
      //   this.ingredients = ingredients;
    });
  }
}

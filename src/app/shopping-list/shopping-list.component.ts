import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];
  private igChanged: Subscription;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.igChanged = this.slService.ingredientChanged.subscribe(
      (ingredients: Ingredients[]) => {
        console.log(ingredients, '123');
        console.log('23213', this.ingredients);
        this.ingredients = ingredients;
        //   this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.slService.ingredientChanged.unsubscribe();
  }
}

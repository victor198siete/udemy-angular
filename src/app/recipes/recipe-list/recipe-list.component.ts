import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [
    new Recipe('A test recipe','This is jus a Test','https://p1.pxfuel.com/preview/695/472/1011/spaghetti-shrimp-italian-food-royalty-free-thumbnail.jpg'),
    new Recipe('Another test recipe','Another Test','https://p1.pxfuel.com/preview/553/409/168/paella-rice-crustaceans-food-royalty-free-thumbnail.jpg'),
    new Recipe('Another more test','Another more Test','https://p1.pxfuel.com/preview/481/106/466/food-eat-soy-noodles-kitchen-royalty-free-thumbnail.jpg'),
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeItem: Recipe) {
    this.recipeWasSelected.emit(recipeItem);
  }

}

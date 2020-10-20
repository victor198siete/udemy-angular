import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe [] = [
        new Recipe(
            'Spaghetti and Shripms',
            'A delicated plate of italian food',
            'https://p1.pxfuel.com/preview/695/472/1011/spaghetti-shrimp-italian-food-royalty-free-thumbnail.jpg',
            [
                new Ingredient('Spaghetti', 1,),
                new Ingredient('Tomatoes', 1,),
                new Ingredient('Shrimps', 3,),
            ]),
        new Recipe(
            'Paella of the Sea',
            'A delicated plate of Spanish food',
            'https://p1.pxfuel.com/preview/553/409/168/paella-rice-crustaceans-food-royalty-free-thumbnail.jpg',
            [
                new Ingredient('Rice', 1,),
                new Ingredient('Clams', 10,),
                new Ingredient('Shrimps', 5,),
            ]),
        new Recipe(
            'Noodles with Octupus and Shrimps',
            'Another delicated plate of italian food',
            'https://p1.pxfuel.com/preview/481/106/466/food-eat-soy-noodles-kitchen-royalty-free-thumbnail.jpg',
            [
                new Ingredient('Noodles', 1,),
                new Ingredient('Octupus', 1,),
                new Ingredient('Shrimps', 3,),
            ]),
      ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice() ;
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}

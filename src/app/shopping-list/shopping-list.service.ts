import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient []>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples',10),
        new Ingredient('Oranges',10),
        new Ingredient('Guavas',10),
      ];

    getIngredient() {
        return this.ingredients.slice();
    }

    addIngredient(newIngredient:Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}

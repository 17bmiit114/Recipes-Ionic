import { Injectable } from '@angular/core';
import { Recipes } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  /* private recipes: Recipes[] = [
    {
      id: 'Recipe1',
      title: 'Maggi',
      ingredients: ['1 pack of Maggi','Salt','Water','Cheese','Maggi Masala'],
      imageUrl: 'https://images.unsplash.com/photo-1619158408840-611126ef8985?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 'Recipe2',
      title: 'Pizza',
      ingredients: ['Pizza Bread','Salt','Cheese','Olives','Capsicum'],
      imageUrl: 'https://images.unsplash.com/photo-1596458397260-255807e979f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=358&q=80'
    },
    {
      id: 'Recipe3',
      title: 'Pan cakes',
      ingredients: ['Egg','Honey','Bananas','Mint leaves','Salt'],
      imageUrl: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=414&q=80'
    },
    {
      id: 'Recipe4',
      title: 'White Sauce Pasta',
      ingredients: ['1 pack of Pasta','Salt','Water','Maida','Paprika'],
      imageUrl: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
    }
  ];
  */
  private recipes: Recipes[] = [];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId
      })
    };
  }

  deleteRecipe(recipeId: string){
      this.recipes = this.recipes.filter(recipe => {
        return recipe.id !== recipeId
      })
  }

  addRecipe(image: string,title: string,ingredients: string){
    this.recipes.push({
      id: 'Recipe'+(this.recipes.length+1),
      title: title,
      ingredients: ingredients.split(','),
      imageUrl: image
    })
  }

  editRecipe(recipe: Recipes){
    this.recipes.find(rec => {
      if(rec.id === recipe.id){
        rec.imageUrl = recipe.imageUrl;
        rec.ingredients = recipe.ingredients;
        rec.title = recipe.title;
      }
    })
  }
}

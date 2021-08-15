import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Recipes } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.page.html',
  styleUrls: ['./edit-recipe.page.scss'],
})
export class EditRecipePage implements OnInit {
  id: string;
  image : string;
  title : string;
  ingredients: string;
  recipe: Recipes;

  constructor(private modalCtrl: ModalController,private recipeService: RecipesService) { }

  ngOnInit() {
  }

  onClose(){
    this.modalCtrl.dismiss();
  }

  async edit(){
    this.recipe = {
      id: this.id,
      title: this.title,
      ingredients: this.ingredients.split(','),
      imageUrl: this.image
    }
    this.recipeService.editRecipe(this.recipe);
    await this.modalCtrl.dismiss();
  }

}

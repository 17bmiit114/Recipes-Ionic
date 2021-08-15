import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Recipes } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage implements OnInit {

  image : string;
  title : string;
  ingredients: string;

  constructor(private modalCtrl: ModalController,private recipeService: RecipesService) { }

  ngOnInit() {
  }

  async onClose(){
    await this.modalCtrl.dismiss();
  }

  async addRecipe(){
    this.recipeService.addRecipe(this.image,this.title,this.ingredients);
    await this.modalCtrl.dismiss();
  }
}

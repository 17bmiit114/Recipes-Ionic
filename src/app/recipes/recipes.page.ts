import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddRecipePage } from './add-recipe/add-recipe.page';
import { EditRecipePage } from './edit-recipe/edit-recipe.page';
import { Recipes } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipes[];
  
  constructor(private recipeService: RecipesService,private modalCtrl: ModalController) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.recipes = this.recipeService.getAllRecipes();
    //console.log(this.recipes);
  }
  
  async onAdd(){
    const modal = await this.modalCtrl.create({
      component: AddRecipePage
    });

    modal.onDidDismiss().then(() => {
      this.recipes = this.recipeService.getAllRecipes();
    })

    modal.present();
  }

  async onEdit(recipe: Recipes){
    //console.log(recipe)
    const modal = await this.modalCtrl.create({
      component: EditRecipePage,
      componentProps: {
        id: recipe.id,
        title: recipe.title,
        image: recipe.imageUrl,
        ingredients: recipe.ingredients.join(',')
      }
    });

    modal.onDidDismiss().then(() => {
      this.recipes = this.recipeService.getAllRecipes();
    })

    modal.present();
  }

}

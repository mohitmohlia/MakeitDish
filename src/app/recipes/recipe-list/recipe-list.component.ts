import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[
  new Recipe('A test recipe', 'this is simple a test','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chicken_freekeh_chopped_salad_with_leftover_salsa_verde.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}

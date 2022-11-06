import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is a simple test',
      'https://pixabay.com/photos/meat-duck-duck-breast-raw-fry-4813261/'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}

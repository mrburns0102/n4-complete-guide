import { Component, ElementRef, EventEmitter, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: "./shopping-list-edit.component.html"
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  ingredientAdded = new EventEmitter<Ingredient>()
  
  constructor() {};

  ngOnInit() {}

  onAddItem() {

  }
}

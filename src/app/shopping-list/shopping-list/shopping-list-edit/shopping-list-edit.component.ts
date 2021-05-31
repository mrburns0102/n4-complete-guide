import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: "./shopping-list-edit.component.html"
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>()
  
  constructor() {};

  ngOnInit() {}

  onAddItem() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);

    this.ingredientAdded.emit(newIngredient);
  }
}

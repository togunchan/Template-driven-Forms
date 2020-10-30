import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductRepository } from '../repository.model';

@Component({
  selector: 'app',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor() { }

  model: ProductRepository = new ProductRepository();

  newProduct: Product = new Product();

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log("New Product: " + this.jsonProduct);
  }

  log(x) {
    console.log(x);
  }

  getValidationErrors(state: any) {
    let ctrlName: string = state.name;
    let messages: string[] = [];

    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case "required":
            messages.push(`You must enter a ${ctrlName}`);
            break;
          case "minlength":
            messages.push(`Min. 3 characters for ${ctrlName}`);
            break;
          case "pattern":
            messages.push(`${ctrlName} contains illegal characters`);
            break;
        }
      }
    }
    return messages;
  }





}

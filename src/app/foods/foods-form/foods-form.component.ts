import { Component, NgModule } from '@angular/core';
import { foods } from '../../../../foods'
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, FormsModule } from '@angular/forms';
import { Food } from '../../shared/interfaces/food';
import { NgModel } from '@angular/forms';


@NgModule({
  declarations:[

  ],

  imports: [FormsModule]

})


export class FoodsFormComponent {

/*   const lastFood = foods[foods.length - 1];
const newId = lastFood ? lastFood.id + 1 : 1;

  const newFood = {
    id: newId,
    name: '',
    image: '',
    calories: '',
    quantity: '', 

  }

  onSubmit(){
    foods.push(this.newFood)
  } */
foodForm = new FormGroup({
  name: new FormControl (""),
  image:new FormControl (""),
  calories: new FormControl (""),
  quantity: new FormControl ("")

 
});

onSubmit(){}  

}

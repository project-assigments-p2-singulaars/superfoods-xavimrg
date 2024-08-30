import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Food } from '../../shared/interfaces/food';

@Component({
  selector: 'app-foods-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './foods-form.component.html',
  styleUrl: './foods-form.component.scss'
})


export class FoodsFormComponent {
  @Input() foodForm!:FormGroup;
  @Output() sentForm=new EventEmitter<Food>();
    onSubmit(){
      const food:Food={
        name: this.foodForm.controls["name"].value,
        calories: this.foodForm.controls["calories"].value,
        image: this.foodForm.controls["image"].value,
        quantity: this.foodForm.controls["quantity"].value,
        id: undefined
      }
      this.sentForm.emit(food);
     }

}

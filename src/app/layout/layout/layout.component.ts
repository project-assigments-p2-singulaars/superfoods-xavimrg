import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodsListComponent } from '../../foods/foods-list/foods-list.component';
import { HeaderComponent } from '../header/header.component';
import { MenuPanelComponent } from '../menu-panel/menu-panel.component';
import { FoodsServiceService } from '../../service/foods-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Food } from '../../shared/interfaces/food';
import { FoodsFormComponent } from "../../foods/foods-form/foods-form.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, FoodsListComponent, HeaderComponent, MenuPanelComponent, FoodsFormComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  private foodService = inject(FoodsServiceService);

  private formBuilder = inject(FormBuilder);

  foods = this.foodService.filterArray;
  foodForm!: FormGroup;

  newFood: Food = { name: '', calories: 0, image: '', quantity: 1 };

  ngOnInit(): void {
    this.foodForm=this.formBuilder.group(this.newFood);
  }


  onSubmit(food:Food){
    this.foodService.addFood(food)
  }

}

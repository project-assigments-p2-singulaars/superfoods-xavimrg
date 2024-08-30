import { Component, Input, OnInit, inject, input } from '@angular/core';
import { Food } from '../../shared/interfaces/food';
import { foods } from '../../../../foods';
import { FormsModule } from '@angular/forms';
import { MenuCounterService } from '../../service/menu.counter.service';


@Component({
  selector: 'app-foods-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './foods-list.component.html',
  styleUrl: './foods-list.component.scss'
})
export class FoodsListComponent implements OnInit {
  foods=input<Food[]>();/* foods:Food[] = foods;  */// transformo foods en un array
inputValue: string = "";
filterArray:Food[] = [];
//trackFoods(Index:number, food: Foods)
//return foods.id;

menuCounterService = inject(MenuCounterService)

ngOnInit(): void {
  
}

/* searchFoods(){

  this.filterArray= this.foods.filter((food:Food) =>
    food.name.toLocaleLowerCase().includes(this.inputValue.toLocaleLowerCase())
)
} */
addToMenu(food: any){
  this.menuCounterService.addToMenu(food); // la funcion viene definida en el servicio y aqui la juntamos
} // to get rid of the error alert
}

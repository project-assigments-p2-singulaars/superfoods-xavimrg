import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../../shared/interfaces/food';
import { foods } from '../../../../foods';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-foods-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './foods-list.component.html',
  styleUrl: './foods-list.component.scss'
})
export class FoodsListComponent implements OnInit {
foods:Food[] = foods; // transformo foods en un array
inputValue: string = "";
filterArray:Food[] = [];
//trackFoods(Index:number, food: Foods)
//return foods.id;
ngOnInit(): void {
  
}

searchFoods(){

  this.filterArray= this.foods.filter((food:Food) =>
    food.name.toLocaleLowerCase().includes(this.inputValue.toLocaleLowerCase())
)
}

}

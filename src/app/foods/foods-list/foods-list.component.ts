import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Food } from '../../shared/interfaces/food';
import { foods } from '../../../../foods';


@Component({
  selector: 'app-foods-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './foods-list.component.html',
  styleUrl: './foods-list.component.scss'
})
export class FoodsListComponent {
foods:Food[] = foods; // transformo foods en un array

//trackFoods(Index:number, food: Foods)
//return foods.id;

}

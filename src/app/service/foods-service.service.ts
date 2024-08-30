import { computed, Injectable, signal } from '@angular/core';
import { foods } from '../../../foods';
import { Food } from '../shared/interfaces/food';

@Injectable({
  providedIn: 'root'
})
export class FoodsServiceService {
  foods = signal(foods);
  text = signal('');
  filterArray = computed(() =>
    this.foods().filter((food) => food.name.toLocaleLowerCase().includes(this.text()))
  );

  addFood(food:Food){
    this.foods.update(v=>[food].concat(v));
  }
}

import { Injectable } from '@angular/core';
import { foods } from '../../../foods';

@Injectable({
  providedIn: 'root'
})
export class FoodsServiceService {

  constructor() { }
  getAllFoods() {
    return foods
  }
}

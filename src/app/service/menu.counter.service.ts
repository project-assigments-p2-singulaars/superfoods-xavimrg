import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuCounterService {
private menus: any[] = [];

  constructor() { }

  addToMenu(food: any){
    this.menus.push(food)
  }

getMenus(){
  return this.menus; 
}


}


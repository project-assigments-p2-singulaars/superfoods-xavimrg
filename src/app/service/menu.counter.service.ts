import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuCounterService {
private menus: any[] = [];

  constructor() { }

  addToMenu(food: any){ // FUNCION AÑADIR AL MENU (CARRITO) definimos food como any
    this.menus.push(food) // este menu = la comida que meta dentro con el PUSH
  }

getMenus(){ // para utilizar en el template de menus (@for (menus of menuCounterService.getMenus(); track menus.id)  )
  return this.menus; 
}

delete(menu: any){
  this.menus = this.menus.filter((i) => i.id !== menu.id);
}
}


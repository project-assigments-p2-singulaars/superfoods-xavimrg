import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MenuCounterService {

private menus: any[] = [];

  constructor() { 

  }

  addToMenu(food: any) { // FUNCION AÑADIR AL MENU (CARRITO) definimos food como any
    const alreadyOnMenu = this.menus.find((item) => item.id === food.id); // creo una variable donde almaceno si esta en el menu,
    // en este menu encuentrame (find) el item , itemn.id es igual a food.id 
    
    if (alreadyOnMenu) { // entonces sumame una cantidad 
      alreadyOnMenu.quantity += 1;
      alreadyOnMenu.totalCalories += food.calories;
    } else { this.menus.push({...food, quantity: 1, totalCalories: food.calories})}
    // este menu = la comida que meta dentro con el PUSH
  }

getMenus(){ // para utilizar en el template de menus (@for (menus of menuCounterService.getMenus(); track menus.id)  )
  return this.menus; 
}
 
delete(menu: any){
  this.menus = this.menus.filter((i) => i.id !== menu.id); //  selecciona el elemento si coincide con el id del elemento seleccionado
}


getTotalCalories() {
  return this.menus.reduce((total, menu) => total + (menu.calories * menu.quantity), 0);
}
/*  incrementQuantity(id: number){
  let menu:any = this.menus.find((i) => i.id === menu.id);
  if (menu) {
    menu.quantity++;
} }
} */

//descreaseQuantity(id: number){
//  let menu = this.menus.find((i) => i.id !== menu.id);
//  if (menu) {
//    menu.quantity--;
//}
//}

//getTotalCalories() {  // En este caso, "acc" representa el acumulador que almacena el resultado parcial de la operación de reducción mientras se itera sobre los elementos del array. 
//  return this.menus.reduce((acc, menu) => {
//    return acc + menu.calories * menubar.quantity;
//  }, 0);
//}


}

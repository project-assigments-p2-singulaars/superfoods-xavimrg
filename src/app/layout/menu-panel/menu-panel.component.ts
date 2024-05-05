import { Component, inject } from '@angular/core';
import { MenuCounterService } from '../../service/menu.counter.service';
import { FoodsListComponent } from '../../foods/foods-list/foods-list.component';

@Component({
  selector: 'app-menu-panel',
  standalone: true,
  imports: [FoodsListComponent],
  templateUrl: './menu-panel.component.html',
  styleUrl: './menu-panel.component.scss'
})
export class MenuPanelComponent {

menu: any;

  menuCounterService = inject(MenuCounterService)

  deleteFromMenu(menu: any){
    this.menuCounterService.delete(menu)
  }
}

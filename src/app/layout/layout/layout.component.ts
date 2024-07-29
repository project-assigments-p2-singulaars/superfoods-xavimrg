import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodsListComponent } from '../../foods/foods-list/foods-list.component';
import { HeaderComponent } from '../header/header.component';
import { MenuPanelComponent } from '../menu-panel/menu-panel.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,FoodsListComponent, HeaderComponent, MenuPanelComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}

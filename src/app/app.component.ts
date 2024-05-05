import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { MenuPanelComponent } from './layout/menu-panel/menu-panel.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { FoodsListComponent } from './foods/foods-list/foods-list.component';
import { FoodsFormComponent } from './foods/foods-form/foods-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MenuPanelComponent, LayoutComponent, FoodsListComponent, FoodsFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'superfoods';
}

import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { FoodsListComponent } from './foods/foods-list/foods-list.component';
import { FoodsDataComponent } from './foods/foods-data/foods-data.component';
import { MenuPanelComponent } from './layout/menu-panel/menu-panel.component';
import { NotfoundpageComponent } from './layout/notfoundpage/notfoundpage.component';

export const routes: Routes = [

    {path: '', component: LayoutComponent,
        children: [
            {path: 'Foods', component: FoodsListComponent},
            {path: 'food/:name', component: FoodsDataComponent},
            {path: 'panelmenuFoods', component: MenuPanelComponent},
            {path: '**', component: NotfoundpageComponent},
        ]
    }, 
];

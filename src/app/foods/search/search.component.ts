import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FoodsServiceService } from '../../service/foods-service.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private foodService=inject(FoodsServiceService);

  text=this.foodService.text;
}

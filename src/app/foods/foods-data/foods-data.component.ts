import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-foods-data',
  standalone: true,
  imports: [],
  templateUrl: './foods-data.component.html',
  styleUrl: './foods-data.component.scss'
})
export class FoodsDataComponent implements OnInit{
  @Input () id!: string;
  food!: string;
ngOnInit(): void {
  this.food = this.id
  
}
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsDataComponent } from './foods-data.component';

describe('FoodsDataComponent', () => {
  let component: FoodsDataComponent;
  let fixture: ComponentFixture<FoodsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodsDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

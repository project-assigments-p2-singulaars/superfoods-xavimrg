import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsListComponent } from './foods-list.component';

describe('FoodsListComponent', () => {
  let component: FoodsListComponent;
  let fixture: ComponentFixture<FoodsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

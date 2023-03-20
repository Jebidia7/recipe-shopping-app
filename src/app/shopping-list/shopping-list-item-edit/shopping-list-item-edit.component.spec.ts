import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListItemEditComponent } from './shopping-list-item-edit.component';

describe('ShoppingListItemEditComponent', () => {
  let component: ShoppingListItemEditComponent;
  let fixture: ComponentFixture<ShoppingListItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListItemEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

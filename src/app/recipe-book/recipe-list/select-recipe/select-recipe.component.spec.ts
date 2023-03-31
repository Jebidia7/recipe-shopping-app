import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRecipeComponent } from './select-recipe.component';

describe('SelectRecipeComponent', () => {
  let component: SelectRecipeComponent;
  let fixture: ComponentFixture<SelectRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

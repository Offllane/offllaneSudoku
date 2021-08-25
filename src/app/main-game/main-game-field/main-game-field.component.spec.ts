import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGameFieldComponent } from './main-game-field.component';

describe('MainGameFieldComponent', () => {
  let component: MainGameFieldComponent;
  let fixture: ComponentFixture<MainGameFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGameFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGameFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

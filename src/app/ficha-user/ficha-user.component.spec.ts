import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaUserComponent } from './ficha-user.component';

describe('FichaUserComponent', () => {
  let component: FichaUserComponent;
  let fixture: ComponentFixture<FichaUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FichaUserComponent]
    });
    fixture = TestBed.createComponent(FichaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

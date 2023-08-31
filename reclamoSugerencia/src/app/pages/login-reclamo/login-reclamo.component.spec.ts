import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginReclamoComponent } from './login-reclamo.component';

describe('LoginReclamoComponent', () => {
  let component: LoginReclamoComponent;
  let fixture: ComponentFixture<LoginReclamoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginReclamoComponent]
    });
    fixture = TestBed.createComponent(LoginReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroReclamoComponent } from './registro-reclamo.component';

describe('RegistroReclamoComponent', () => {
  let component: RegistroReclamoComponent;
  let fixture: ComponentFixture<RegistroReclamoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroReclamoComponent]
    });
    fixture = TestBed.createComponent(RegistroReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

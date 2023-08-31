import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReclamoComponent } from './admin-reclamo.component';

describe('AdminReclamoComponent', () => {
  let component: AdminReclamoComponent;
  let fixture: ComponentFixture<AdminReclamoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminReclamoComponent]
    });
    fixture = TestBed.createComponent(AdminReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

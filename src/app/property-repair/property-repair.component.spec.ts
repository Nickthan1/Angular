import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyRepairComponent } from './property-repair.component';

describe('PropertyRepairComponent', () => {
  let component: PropertyRepairComponent;
  let fixture: ComponentFixture<PropertyRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyRepairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

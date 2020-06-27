import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DPColumnComponent } from './column.component';

describe('ColumnComponent', () => {
  let component: DPColumnComponent;
  let fixture: ComponentFixture<DPColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DPColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DPColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

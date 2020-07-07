import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowExpandableComponent } from './row-expandable.component';

describe('RowExpandableComponent', () => {
  let component: RowExpandableComponent;
  let fixture: ComponentFixture<RowExpandableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowExpandableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowExpandableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

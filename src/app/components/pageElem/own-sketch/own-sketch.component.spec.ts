import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnSketchComponent } from './own-sketch.component';

describe('OwnSketchComponent', () => {
  let component: OwnSketchComponent;
  let fixture: ComponentFixture<OwnSketchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnSketchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

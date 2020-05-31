import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasCatalogueComponent } from './ideas-catalogue.component';

describe('IdeasCatalogueComponent', () => {
  let component: IdeasCatalogueComponent;
  let fixture: ComponentFixture<IdeasCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeasCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


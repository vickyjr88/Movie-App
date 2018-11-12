import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeauredComponent } from './feaured.component';

describe('FeauredComponent', () => {
  let component: FeauredComponent;
  let fixture: ComponentFixture<FeauredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeauredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeauredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

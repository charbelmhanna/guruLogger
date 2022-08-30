import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoggerComponent } from './view-logger.component';

describe('ViewLoggerComponent', () => {
  let component: ViewLoggerComponent;
  let fixture: ComponentFixture<ViewLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

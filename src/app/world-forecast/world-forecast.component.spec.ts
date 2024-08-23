import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldForecastComponent } from './world-forecast.component';

describe('WorldForecastComponent', () => {
  let component: WorldForecastComponent;
  let fixture: ComponentFixture<WorldForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorldForecastComponent]
    });
    fixture = TestBed.createComponent(WorldForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

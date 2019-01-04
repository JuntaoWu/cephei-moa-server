import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsAreaChartComponent } from './stats-area-chart.component';

describe('StatsAreaChartComponent', () => {
  let component: StatsAreaChartComponent;
  let fixture: ComponentFixture<StatsAreaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsAreaChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

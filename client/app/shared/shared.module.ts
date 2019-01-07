import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DayOfWeekPipe } from 'app/pipes/day-of-week.pipe';
import { GenderPipe } from 'app/pipes/gender.pipe';
import { NbCardModule } from '@nebular/theme';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { NgxEchartsModule } from 'ngx-echarts';

import { TrafficBarComponent } from './traffic-bar/traffic-bar.component';
import { StatsAreaChartComponent } from './stats-area-chart/stats-area-chart.component';


@NgModule({
  declarations: [
    DayOfWeekPipe,
    GenderPipe,
    TrafficBarComponent,
    StatsAreaChartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NbCardModule,
    MatTableModule,
    MatPaginatorModule,
    NgxEchartsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    NbCardModule,
    NgxEchartsModule,
    DayOfWeekPipe,
    GenderPipe,
    TrafficBarComponent,
    StatsAreaChartComponent
  ]
})
export class SharedModule { }

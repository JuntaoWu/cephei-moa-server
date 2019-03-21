import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DayOfWeekPipe } from 'app/pipes/day-of-week.pipe';
import { GenderPipe } from 'app/pipes/gender.pipe';
import { NbCardModule } from '@nebular/theme';
import { MatTableModule, MatTabsModule, MatPaginatorModule } from '@angular/material';
import { NgxEchartsModule } from 'ngx-echarts';

import { TrafficBarComponent } from './traffic-bar/traffic-bar.component';
import { StatsAreaChartComponent } from './stats-area-chart/stats-area-chart.component';
import { LineBarChartComponent } from './line-bar-chart/line-bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { GameStatusPipe } from 'app/pipes/game-status.pipe';


@NgModule({
  declarations: [
    DayOfWeekPipe,
    GenderPipe,
    GameStatusPipe,
    TrafficBarComponent,
    StatsAreaChartComponent,
    LineBarChartComponent,
    PieChartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NbCardModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    NgxEchartsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    NbCardModule,
    NgxEchartsModule,
    DayOfWeekPipe,
    GenderPipe,
    GameStatusPipe,
    TrafficBarComponent,
    StatsAreaChartComponent,
    LineBarChartComponent,
    PieChartComponent,
  ]
})
export class SharedModule { }

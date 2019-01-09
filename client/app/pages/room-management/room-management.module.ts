import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { RoomManagementRoutingModule } from './room-management-routing.module';

import { RoomManagementComponent } from './room-management.component';
import { DayStatisticsComponent } from './day-statistics/day-statistics.component';
import { WeekStatisticsComponent } from './week-statistics/week-statistics.component';
import { WinRateComponent } from './win-rate/win-rate.component';

@NgModule({
  declarations: [
    RoomManagementComponent,
    DayStatisticsComponent, 
    WeekStatisticsComponent, WinRateComponent
  ],
  imports: [
    SharedModule,
    RoomManagementRoutingModule
  ]
})
export class RoomManagementModule { }

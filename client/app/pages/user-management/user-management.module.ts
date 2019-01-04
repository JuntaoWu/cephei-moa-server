import { NgModule } from '@angular/core';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { SharedModule } from 'app/shared/shared.module';

import { UserManagementComponent } from './user-management.component';
import { DayStatisticsComponent } from './day-statistics/day-statistics.component';
import { WeekStatisticsComponent } from './week-statistics/week-statistics.component';
import { GamesStatisticsComponent } from './games-statistics/games-statistics.component';

@NgModule({
  declarations: [
    UserManagementComponent, 
    DayStatisticsComponent, 
    WeekStatisticsComponent, 
    GamesStatisticsComponent
  ],
  imports: [
    SharedModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }

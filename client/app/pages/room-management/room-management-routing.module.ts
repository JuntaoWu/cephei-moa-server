import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomManagementComponent } from './room-management.component'
import { DayStatisticsComponent } from './day-statistics/day-statistics.component'
import { WeekStatisticsComponent } from './week-statistics/week-statistics.component'

const routes: Routes = [
  {
    path: '',
    component: RoomManagementComponent
  },
  {
    path: 'day',
    component: DayStatisticsComponent
  },
  {
    path: 'week',
    component: WeekStatisticsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomManagementRoutingModule { }

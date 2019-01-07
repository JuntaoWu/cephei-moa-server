import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserManagementComponent } from './user-management.component'
import { DayStatisticsComponent } from './day-statistics/day-statistics.component'
import { WeekStatisticsComponent } from './week-statistics/week-statistics.component'
import { GamesStatisticsComponent } from './games-statistics/games-statistics.component'
import { UserMapComponent } from './user-map/user-map.component'

const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent
  },
  {
    path: 'day',
    component: DayStatisticsComponent
  },
  {
    path: 'week',
    component: WeekStatisticsComponent
  },
  {
    path: 'games',
    component: GamesStatisticsComponent
  },
  {
    path: 'map',
    component: UserMapComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }

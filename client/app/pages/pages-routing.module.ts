import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'user',
        loadChildren: './user-management/user-management.module#UserManagementModule'
      },
      {
        path: 'room',
        loadChildren: './room-management/room-management.module#RoomManagementModule'
      },
      {
        path: 'cycle',
        loadChildren: './cycle-statistics/cycle-statistics.module#CycleStatisticsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

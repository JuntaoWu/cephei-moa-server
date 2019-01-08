import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaysComponent } from './days/days.component';
import { WeeksComponent } from './weeks/weeks.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'days',
    pathMatch: 'full'
  },
  {
    path: 'days',
    component: DaysComponent
  },
  {
    path: 'weeks',
    component: WeeksComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CycleStatisticsRoutingModule { }

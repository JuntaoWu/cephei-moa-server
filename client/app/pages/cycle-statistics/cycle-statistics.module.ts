import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { CycleStatisticsRoutingModule } from './cycle-statistics-routing.module';

import { DaysComponent } from './days/days.component';
import { WeeksComponent } from './weeks/weeks.component';

@NgModule({
  declarations: [
    DaysComponent,
    WeeksComponent
  ],
  imports: [
    SharedModule,
    CycleStatisticsRoutingModule
  ]
})
export class CycleStatisticsModule { }

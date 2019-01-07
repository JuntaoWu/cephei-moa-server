import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'app/shared/shared.module';
import { RecentUserCardComponent } from './recent-user-card/recent-user-card.component';
import { RecentRoomCardComponent } from './recent-room-card/recent-room-card.component';
import { TrendCardComponent } from './trend-card/trend-card.component';

@NgModule({
  declarations: [DashboardComponent, RecentUserCardComponent, RecentRoomCardComponent, TrendCardComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

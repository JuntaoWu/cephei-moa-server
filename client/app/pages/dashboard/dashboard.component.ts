import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public recentNewUsers$: Observable<any>;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.recentNewUsers$ = this.dashboardService.list();
  }

}

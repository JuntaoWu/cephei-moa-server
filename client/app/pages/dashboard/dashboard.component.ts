import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardService } from './dashboard.service';
import { DashboardModel } from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public displayedColumns: string[] = ['registeredAt', 'count', 'dayOfWeek'];

  public data: DashboardModel;
  public countNewUserData: any[];
  public countNewRoomData: any[];
  public recentNewUserPoints: number[];
  public recentNewRoomPoints: number[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.list().subscribe((data: DashboardModel) => {
      this.data = data;
      data.countNewUserData = data.countNewUserData || [];

      this.countNewUserData = this.reduceData(data.countNewUserData).reverse();
      this.countNewRoomData = this.reduceData(data.countNewRoomData).reverse();
      this.recentNewUserPoints = data.countNewUserData.map(item => item.count);
      this.recentNewRoomPoints = data.countNewRoomData.map(item => item.count);
    });
  }

  reduceData(data) {
    data = data || [];
    const firstDay = data[0] || {};
    const myData = data.length > 1 ? data.slice(1) : data;

    return myData.reduce((result, day, index) => {

      const hasResult = result[index - 1];
      const prevDate = hasResult ? result[index - 1].comparison.nextDate : firstDay.dayOfWeek;
      const prevValue = hasResult ? result[index - 1].comparison.nextValue : firstDay.count;
      const nextValue = day.count;
      const deltaValue = (prevValue - nextValue) / prevValue * 100;

      const item = {
        dayOfWeek: day.dayOfWeek,
        count: day.count,
        date: day.date,
        delta: {
          up: deltaValue <= 0,
          value: Math.ceil(Math.abs(deltaValue)),
        },
        comparison: {
          prevDate,
          prevValue,
          nextDate: day.dayOfWeek,
          nextValue,
        },
      };

      return [...result, item];
    }, []);
  }

}

import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'user-week-statistics',
  templateUrl: './week-statistics.component.html',
  styleUrls: ['./week-statistics.component.scss']
})
export class WeekStatisticsComponent implements OnInit {

  constructor(private UMService: UserManagementService) { }

  chartData: any;

  ngOnInit() {
    this.UMService.listDayStatistic().subscribe(val => {
      let xList = [], newUsers = [], totalUsers = [];
      let index = 0;
      let data = val.reverse();
      data.forEach((item, index) => {
        let i = Math.floor(index / 7);
        newUsers[i] = +(newUsers[i] || 0) + item.count;
        if (index % 7 == 6) {
          totalUsers[i] = +newUsers[i] + (+totalUsers[i - 1] || 0);
          xList[i] = `${data[index - index % 7].registeredAt.substr(0, 10)}~${item.registeredAt.substr(0, 10)}`;
        }
      });
      
      this.chartData = {
        xAxis: xList,
        series: {
          '新增用户': newUsers,
          '总用户': totalUsers
        }
      }
    });
  }
}

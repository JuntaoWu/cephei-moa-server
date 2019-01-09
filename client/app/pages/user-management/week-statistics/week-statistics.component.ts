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
    this.UMService.listWeekStatistic().subscribe(val => {
      let xList = [], newUsers = [], totalUsers = [];
      let index = 0;
      let data = val.reverse();
      data.forEach((item, index) => {
        xList.push(item.registeredAt.substr(0, 10))
        newUsers.push(item.count);
        let total = +item.count + (+totalUsers[index - 1] || 0);
        totalUsers.push(total);
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

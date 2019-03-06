import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserManagementService } from '../user-management.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'user-day-statistics',
  templateUrl: './day-statistics.component.html',
  styleUrls: ['./day-statistics.component.scss']
})
export class DayStatisticsComponent implements OnInit {

  constructor(private UMService: UserManagementService) { }

  displayedColumns: string[] = ['registeredAt', 'registeredWeek', 'count', 'total'];

  allList: Array<any> = [];
  showList: Array<any> = [];
  chartData: {};

  ngOnInit() {

    this.UMService.listDayStatistic().subscribe(val => {
      let xList = [],
        newUsers = [],
        totalUsers = [];
      val.reverse().forEach((item, index) => {
        xList.push(item.registeredAt.substr(0, 10))
        newUsers.push(item.count);
        let total = +item.count + (+totalUsers[index - 1] || 0);
        totalUsers.push(total);
        this.allList.push({ ...item, total: total });
      });
      this.allList = this.allList.reverse();
      this.showList = this.allList.slice(this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize);

      this.chartData = {
        xAxis: xList,
        series: {
          '新增用户': newUsers,
          '总用户': totalUsers
        }
      }
    });
  }

  pageIndex: number = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 50];

  refreshPage($event: PageEvent) {
    this.pageIndex = $event.pageIndex;
    this.pageSize = $event.pageSize;

    this.showList = this.allList.slice(this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize);
  }

}
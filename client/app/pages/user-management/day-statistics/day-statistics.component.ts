import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-day-statistics',
  templateUrl: './day-statistics.component.html',
  styleUrls: ['./day-statistics.component.scss']
})
export class DayStatisticsComponent implements OnInit {

  constructor(private UMService: UserManagementService) { }

  displayedColumns: string[] = ['registeredAt', 'registeredWeek', 'count', 'total'];
  
  allList: Array<any> = [];
  showList: Array<any> = [];

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
      this.pages = Math.ceil((this.allList.length) / this.limit);
      this.showList = this.allList.slice(this.pageIndex * this.limit, this.pageIndex * this.limit + this.limit);
      
      this.drawChart(xList, newUsers, totalUsers);
    });
  }

  showChart: boolean = false;
  pages: number;
  pageIndex: number = 0;
  limit: number = 10;
  chartOption: any;

  drawChart(xList, newUsers, totalUsers) {
    // 绘制图表
    this.chartOption = {
        title: {
            text: '日增用户视图'
        },
        legend: {
            data: ["新增用户", "总用户"]
        },
        tooltip: {},
        toolbox: {
          show : true,
          feature : {
            mark : {show: true},
            magicType: {show: true, type: ['line', 'bar']},
            restore : {show: true}
          }
        },
        dataZoom: [
          {
            show: true,
            start: 0,
            end: 100
          }
        ],
        xAxis: {
          // type: "time",
          data: xList
        },
        yAxis: {},
        series: [
          {
            name: '新增用户',
            type: 'line',
            stack: 'one',
            data: newUsers
          },
          {
            name: '总用户',
            type: 'line',
            stack: 'one',
            data: totalUsers
          }
        ]
    };
  }

  prePage(isFirst: boolean = false) {
    if (!this.pageIndex) return;
    if (isFirst) {
      this.pageIndex = 0;
    }
    else {
      this.pageIndex -= 1;
    }
    this.showList = this.allList.slice(this.pageIndex * this.limit, this.pageIndex * this.limit + this.limit);
  }

  nextPage(isLast: boolean = false) {
    if (this.pageIndex == this.pages - 1) return;
    if (isLast) {
      this.pageIndex = this.pages - 1;
    }
    else {
      this.pageIndex += 1;
    }
    this.showList = this.allList.slice(this.pageIndex * this.limit, this.pageIndex * this.limit + this.limit);
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserManagementService } from '../user-management.service'
import * as echarts from 'echarts';

@Component({
  selector: 'app-day-statistics',
  templateUrl: './day-statistics.component.html',
  styleUrls: ['./day-statistics.component.scss']
})
export class DayStatisticsComponent implements OnInit {

  constructor(private UMService: UserManagementService) { }

  displayedColumns: string[] = ['registeredAt', 'registeredWeek', 'count'];
  statistics$: Observable<any>;

  ngOnInit() {
    
    this.statistics$ = this.UMService.listDayStatistic();
    this.statistics$.subscribe(val => {
      let xList = [],
          newUsers = [],
          totalUsers = [];
      val.reverse().forEach(item => {
        xList.push(item.registeredAt.substr(0, 10))
        newUsers.push(item.count);
      })

      for (let i = 0; i < newUsers.length; i++) {
        totalUsers.push(+newUsers[i] + (+totalUsers[i - 1] || 0));
      }

      this.drawChart(xList, newUsers, totalUsers);
    });
  }

  pages: number;
  pageIndex: number = 0;
  limit: number = 10;
  chartOption: any;

  drawChart(xList, newUsers, totalUsers) {
    // 绘制图表
    this.chartOption = {
        title: {
            text: 'ECharts 入门示例'
        },
        legend: {
            data: ["新增用户", "总用户"],
            align: 'center'
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

}

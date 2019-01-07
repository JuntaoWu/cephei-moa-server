import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-week-statistics',
  templateUrl: './week-statistics.component.html',
  styleUrls: ['./week-statistics.component.scss']
})
export class WeekStatisticsComponent implements OnInit {

  constructor(private UMService: UserManagementService) { }

  chartOption: any;

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
          xList[i] = `${data[index - 6].registeredAt.substr(0, 10)}~${item.registeredAt.substr(0, 10)}`;
        }
      });
      
      this.drawChart(xList, newUsers, totalUsers);
    });
  }

  drawChart(xList, newUsers, totalUsers) {
    // 绘制图表
    this.chartOption = {
        title: {
            text: '周增用户饼图'
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
}

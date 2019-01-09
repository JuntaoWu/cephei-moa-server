import { Component, OnInit } from '@angular/core';
import { CycleStatisticsService } from '../cycle-statistics.service';
import { UserManagementService } from '../../user-management/user-management.service';
import { RoomManagementService } from '../../room-management/room-management.service';

@Component({
  selector: 'app-weeks',
  templateUrl: './weeks.component.html',
  styleUrls: ['./weeks.component.scss']
})
export class WeeksComponent implements OnInit {

  constructor(private CSService: CycleStatisticsService,
              private UMService: UserManagementService,
              private RMService: RoomManagementService) { }

  chartDataReady: boolean = false;
  chartData1: {xAxis: any, series: any};
  chartData2: {};

  ngOnInit() {

    
    this.chartData1 = {
      xAxis: [],
      series: {
        '新增用户': [],
        '新增开局': [],
      }
    };
    this.UMService.listWeekStatistic().subscribe(res => {
      console.log(res);
      this.chartData1.xAxis = [];
      this.chartData1.series['新增用户'] = [];
      res.reverse().forEach((item, index) => {
        const timeAt = item.registeredAt && item.registeredAt.substr(0, 10);
        this.chartData1.xAxis.push(timeAt);
        this.chartData1.series['新增用户'].push(item.count);
      });
      this.RMService.listWeekStatistic().subscribe(res => {
        console.log(res);
        this.chartData1.series['新增开局'] = [];
        res.reverse().forEach((item, index) => {
          const timeAt = item.createdAt && item.createdAt.substr(0, 10);
          this.chartData1.xAxis.forEach((val, idx) => {
            this.chartData1.series['新增开局'][idx] = 0;
            if (val == timeAt) {
              this.chartData1.series['新增开局'][idx] = item.count;
            }
          });
          this.chartDataReady = true;
        });

      })
    })

    this.CSService.cycleStatistic("week").subscribe(res => {
      console.log(res);
      const dayOfWeekMap = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      let xList = [], 
          newUsers = [], newRooms = [];
      for (let i = 0; i < 7; i++) {
        xList[i] = dayOfWeekMap[i];
        newUsers[i] = newRooms[i] = 0;
      }
      res.user.forEach(val => {
        if (val.registeredAt) {
          newUsers[+val.registeredAt-1] = val.count;
        }
        
      });
      res.room.forEach(val => {
        if (val.createdAt) {
          newRooms[+val.createdAt-1] = val.count;
        }
      });

      this.chartData2 = {
        xAxis: xList,
        series: {
          '新增用户': newUsers,
          '新增开局': newRooms
        }
      }
    });
  }
}

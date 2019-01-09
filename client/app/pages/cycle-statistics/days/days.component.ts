import { Component, OnInit } from '@angular/core';
import { CycleStatisticsService } from '../cycle-statistics.service';
import { UserManagementService } from '../../user-management/user-management.service';
import { RoomManagementService } from '../../room-management/room-management.service';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})
export class DaysComponent implements OnInit {

  constructor(private CSService: CycleStatisticsService,
              private UMService: UserManagementService,
              private RMService: RoomManagementService) { }

  dayChartDataReady: boolean = false;
  dayChartData: {xAxis, series};
  hourChartData: {};
  
  ngOnInit() {
    
    this.dayChartData = {
      xAxis: [],
      series: {
        '新增用户': [],
        '新增开局': [],
      }
    };
    this.UMService.listDayStatistic().subscribe(res => {
      console.log(res);
      this.dayChartData.xAxis = [];
      this.dayChartData.series['新增用户'] = [];
      res.reverse().forEach((item, index) => {
        const timeAt = item.registeredAt && item.registeredAt.substr(0, 10);
        this.dayChartData.xAxis.push(timeAt);
        this.dayChartData.series['新增用户'].push(item.count);
      });
      this.RMService.listDayStatistic().subscribe(res => {
        console.log(res);
        this.dayChartData.series['新增开局'] = [];
        res.reverse().forEach((item, index) => {
          const timeAt = item.createdAt && item.createdAt.substr(0, 10);
          this.dayChartData.xAxis.forEach((val, idx) => {
            this.dayChartData.series['新增开局'][idx] = 0;
            if (val == timeAt) {
              this.dayChartData.series['新增开局'][idx] = item.count;
            }
          });
          this.dayChartDataReady = true;
        });

      })
    })

    this.CSService.cycleStatistic().subscribe(res => {
      console.log(res);
      let xList = [], 
          newUsers = [], newRooms = [];
      for (let i = 0; i < 24; i++) {
        xList[i] = `${i}:00-${i}:59`;
        newUsers[i] = newRooms[i] = 0;
      }
      res.user.forEach(val => {
        newUsers[val.registeredAt || 0] = val.count;
      });
      res.room.forEach(val => {
        newRooms[val.createdAt || 0] = val.count;
      });

      this.hourChartData = {
        xAxis: xList,
        series: {
          '新增用户': newUsers,
          '新增开局': newRooms
        }
      }
    });
  }

}

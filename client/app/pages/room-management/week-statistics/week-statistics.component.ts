import { Component, OnInit } from '@angular/core';
import { RoomManagementService } from '../room-management.service';

@Component({
  selector: 'room-week-statistics',
  templateUrl: './week-statistics.component.html',
  styleUrls: ['./week-statistics.component.scss']
})
export class WeekStatisticsComponent implements OnInit {

  constructor(private RMService: RoomManagementService) { }

  chartData: any;

  ngOnInit() {
    this.RMService.listDayStatistic().subscribe(val => {
      let xList = [], newRooms = [], totalRooms = [];
      let index = 0;
      let data = val.reverse();
      console.log(data);

      data.forEach((item, index) => {
        let i = Math.floor(index / 7);
        newRooms[i] = +(newRooms[i] || 0) + item.count;
        if (index % 7 == 6 || index + 1 == data.length) {
          totalRooms[i] = +newRooms[i] + (+totalRooms[i - 1] || 0);
          xList[i] = `${data[index - index % 7].createdAt && data[index - index % 7].createdAt.substr(0, 10)}~${item.createdAt && item.createdAt.substr(0, 10)}`;
        }
      });
      
      this.chartData = {
        xAxis: xList,
        series: {
          '新增开局': newRooms,
          '总开局': totalRooms
        }
      }
    });
  }
}

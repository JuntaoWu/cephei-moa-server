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
    this.RMService.listWeekStatistic().subscribe(val => {
      let xList = [], newRooms = [], totalRooms = [];
      let index = 0;
      let data = val.reverse();
      console.log(data);

      data.forEach((item, index) => {
        xList.push(item.createdAt && item.createdAt.substr(0, 10))
        newRooms.push(item.count);
        let total = +item.count + (+totalRooms[index - 1] || 0);
        totalRooms.push(total);
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

import { Component, OnInit } from '@angular/core';
import { RoomManagementService } from '../room-management.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'room-day-statistics',
  templateUrl: './day-statistics.component.html',
  styleUrls: ['./day-statistics.component.scss']
})
export class DayStatisticsComponent implements OnInit {

  constructor(private RMService: RoomManagementService) { }

  displayedColumns: string[] = ['createdAt', 'dayOfWeek', 'count', 'total'];

  allList: Array<any> = [];
  showList: Array<any> = [];
  chartData: {};

  ngOnInit() {

    this.RMService.listDayStatistic().subscribe(res => {
      let xList = [],
          _new = [],
          _total = [];
      console.log(res)
      res.reverse().forEach((item, index) => {
        xList.push(item.createdAt && item.createdAt.substr(0, 10))
        _new.push(item.count);
        let total = +item.count + (+_total[index - 1] || 0);
        _total.push(total);
        this.allList.push({ ...item, total: total });
      });
      this.allList = this.allList.reverse();
      this.showList = this.allList.slice(this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize);

      this.chartData = {
        xAxis: xList,
        series: {
          '新增开局': _new,
          '总开局': _total
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

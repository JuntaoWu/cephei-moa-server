import { Component, OnInit } from '@angular/core';
import { RoomManagementService } from './room-management.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrls: ['./room-management.component.scss']
})
export class RoomManagementComponent implements OnInit {

  constructor(private RMService: RoomManagementService) { }

  public displayedColumns: string[] = ['id', 'players', 'winCamp', 'status', 'createdAt', 'updatedAt', 'dayOfWeek'];

  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 50];
  rooms: Array<any>;
  totalRoom: number;

  chartData: any;

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    this.RMService.list((this.pageIndex) * this.pageSize, this.pageSize).subscribe(res => {
      console.log(res);
      this.rooms = res.list;
      this.totalRoom = res.totalRoom;
      if (!this.chartData) {
        this.chartData = [];
        let obj = {};
        res.record.forEach(val => {
          if (!obj[val.count]) {
            obj[val.count] = 1;
          }
          else {
            obj[val.count] += 1;
          }
        });
        for (let key in obj) {
          this.chartData.push({
            name: `${key}人局`,
            value: obj[key]
          })
        }
      }
    });
  }

  refreshPage($event: PageEvent) {
    this.pageIndex = $event.pageIndex;
    this.pageSize = $event.pageSize;

    this.getPage();
  }
}

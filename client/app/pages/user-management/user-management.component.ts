import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserManagementService } from './user-management.service'
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor(private UMService: UserManagementService) { }

  public displayedColumns: string[] = ['id', 'nickname', 'avatar', 'gender', 'registeredAt', 'registeredWeek'];

  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 50];

  public users: Array<any>;
  public totalUser: number;
  public totalWxUser: number;
  public totalAnonymousUser: number;
  totalWxUserMen: number;
  totalWxUserWomen: number;
  chartOption: any;
  showChart: boolean = false;

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    this.UMService.list((this.pageIndex) * this.pageSize, this.pageSize).subscribe(res => {
      this.users = res.list;
      this.totalUser = res.totalUser;
      this.totalWxUser = res.totalWxUser;
      this.totalAnonymousUser = res.totalAnonymousUser;
      this.totalWxUserMen = res.totalWxUserMen;
      this.totalWxUserWomen = res.totalWxUserWomen;
      this.serChartsOption();
    });
  }

  refreshPage($event: PageEvent) {
    this.pageIndex = $event.pageIndex;
    this.pageSize = $event.pageSize;

    this.getPage();
  }

  serChartsOption() {
    this.chartOption = {
      title: {
        text: '用户性别统计',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
      },
      legend: {
        bottom: 10,
        data: ['男', '女', '游客']
      },
      series: [
        {
          type: 'pie',
          radius: '65%',
          center: ['50%', '50%'],
          selectedMode: 'single',
          data: [
            { value: this.totalWxUserMen, name: '男' },
            { value: this.totalWxUserWomen, name: '女' },
            { value: this.totalAnonymousUser, name: '游客' }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
}

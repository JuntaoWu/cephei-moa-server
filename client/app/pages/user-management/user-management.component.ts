import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserManagementService } from './user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor(private UMService: UserManagementService) { }

  displayedColumns: string[] = ['id', 'nickname', 'avatar', 'gender', 'registeredAt', 'registeredWeek'];
  
  ngOnInit() {
    this.getPage();
  }

  users: Array<any>;
  pages: number;
  pageIndex: number = 0;
  limit: number = 10;
  totalUser: number;
  totalWxUser: number;
  totalAnonymousUser: number;
  totalWxUserMen: number;
  totalWxUserWomen: number;
  chartOption: any;
  showChart: boolean = false;

  getPage() {
    this.UMService.list(this.pageIndex * this.limit, this.limit).subscribe(res => {
      console.log(res);
      this.users = res.list;
      this.totalUser = res.totalUser;
      this.totalWxUser = res.totalWxUser;
      this.totalAnonymousUser = res.totalAnonymousUser;
      this.totalWxUserMen = res.totalWxUserMen;
      this.totalWxUserWomen = res.totalWxUserWomen;
      this.pages = Math.ceil((this.totalUser) / this.limit);
      this.serChartsOption();
    });
  }
  
  prePage(isFirst: boolean = false) {
    if (!this.pageIndex) return;
    if (isFirst) {
      this.pageIndex = 0;
    }
    else {
      this.pageIndex -= 1;
    }
    this.getPage();
  }

  nextPage(isLast: boolean = false) {
    if (this.pageIndex == this.pages - 1) return;
    if (isLast) {
      this.pageIndex = this.pages - 1;
    }
    else {
      this.pageIndex += 1;
    }
    this.getPage();
  }

  serChartsOption() {
    this.chartOption =  {
      title: {
          text: '用户性别统计',
          left: 'center'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{b} : {c} ({d}%)"
      },
      legend: {
          bottom: 10,
          data: ['男', '女','游客']
      },
      series : [
          {
              type: 'pie',
              radius : '65%',
              center: ['50%', '50%'],
              selectedMode: 'single',
              data:[
                  {value: this.totalWxUserMen, name: '男'},
                  {value: this.totalWxUserWomen, name: '女'},
                  {value: this.totalAnonymousUser, name: '游客'}
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

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

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    this.UMService.list((this.pageIndex) * this.pageSize, this.pageSize).subscribe(res => {
      this.users = res.list;
      this.totalUser = res.totalUser;
      this.totalWxUser = res.totalWxUser;
      this.totalAnonymousUser = res.totalAnonymousUser;
    });
  }

  refreshPage($event: PageEvent) {
    this.pageIndex = $event.pageIndex;
    this.pageSize = $event.pageSize;

    this.getPage();
  }

}

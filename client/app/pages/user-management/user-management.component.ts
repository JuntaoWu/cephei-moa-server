import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserManagementService } from './user-management.service'

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor(private UMService: UserManagementService) { }

  displayedColumns: string[] = ['id', 'nickname', 'avatar', 'gender', 'registeredAt', 'registeredWeek'];
  users$: Observable<any>;
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


  getPage() {
    this.UMService.list(this.pageIndex * this.limit, this.limit).subscribe(res => {
      console.log(res);
      this.users = res.list;
      this.totalUser = res.totalUser;
      this.totalWxUser = res.totalWxUser;
      this.totalAnonymousUser = res.totalAnonymousUser;
      this.pages = Math.floor((this.totalUser) / this.limit) + 1;
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

}

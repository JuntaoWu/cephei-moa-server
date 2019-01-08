import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'user-games-statistics',
  templateUrl: './games-statistics.component.html',
  styleUrls: ['./games-statistics.component.scss']
})
export class GamesStatisticsComponent implements OnInit {

  constructor(private UMService: UserManagementService) { }

  displayedColumns: string[] = ['games', 'count'];
  usergames: Array<any>;
  chartData: any;

  ngOnInit() {
    this.UMService.listUserGames().subscribe(res => {
      this.usergames = res;
      this.chartData = [];
      res.forEach(item => {
        this.chartData.push({
          name: item.games.toString(),
          value: item.count
        });
      });
    });
  }
}

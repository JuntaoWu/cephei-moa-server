import { Component, OnInit } from '@angular/core';
import { RoomManagementService } from '../room-management.service';

@Component({
  selector: 'app-win-rate',
  templateUrl: './win-rate.component.html',
  styleUrls: ['./win-rate.component.scss']
})
export class WinRateComponent implements OnInit {

  constructor(private RMService: RoomManagementService) { }

  chartData: Array<{name: String, value: Number}>;
  chartData6: Array<{name: String, value: Number}>;
  chartData7: Array<{name: String, value: Number}>;
  chartData8: Array<{name: String, value: Number}>;

  ngOnInit() {
    this.RMService.winRate().subscribe(res => {
      console.log(res);
      this.chartData = [
        { name: "许愿阵营获胜", value: res.all.winXu },
        { name: "老朝奉阵营获胜", value: res.all.winLao },
      ];
      this.chartData6 = [
        { name: "许愿阵营获胜", value: res[6].winXu },
        { name: "老朝奉阵营获胜", value: res[6].winLao },
      ];
      this.chartData7 = [
        { name: "许愿阵营获胜", value: res[7].winXu },
        { name: "老朝奉阵营获胜", value: res[7].winLao },
      ];
      this.chartData8 = [
        { name: "许愿阵营获胜", value: res[8].winXu },
        { name: "老朝奉阵营获胜", value: res[8].winLao },
      ];
    });
  }

}

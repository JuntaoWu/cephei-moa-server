import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-games-statistics',
  templateUrl: './games-statistics.component.html',
  styleUrls: ['./games-statistics.component.scss']
})
export class GamesStatisticsComponent implements OnInit {

  constructor(private UMService: UserManagementService) { }

  displayedColumns: string[] = ['games', 'count'];
  usergames: Array<any>;
  showChart: boolean = false;
  chartOption: any;

  ngOnInit() {
    this.UMService.listUserGames().subscribe(res => {
      this.usergames = res;
      let legendData = [], seriesData = [];
      res.forEach(item => {
        legendData.push(item.games.toString());
        seriesData.push({
          name: item.games.toString(),
          value: item.count
        });
      });
      this.setChartsOption(legendData, seriesData);
    });
  }

  setChartsOption(legendData, seriesData) {
    this.chartOption =  {
      title: {
          text: '用户局数饼图',
          left: 'center'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{b} : {c} ({d}%)"
      },
      legend: {
          bottom: 10,
          data: legendData
      },
      series : [
          {
              type: 'pie',
              radius : '65%',
              center: ['50%', '50%'],
              selectedMode: 'single',
              data: seriesData,
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

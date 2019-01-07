import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserManagementService } from '../user-management.service';
import * as echarts from 'echarts';
import { NbThemeService } from '@nebular/theme';
import { delay, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-day-statistics',
  templateUrl: './day-statistics.component.html',
  styleUrls: ['./day-statistics.component.scss']
})
export class DayStatisticsComponent implements OnInit {

  constructor(private theme: NbThemeService,
    private UMService: UserManagementService) { }

  displayedColumns: string[] = ['registeredAt', 'registeredWeek', 'count'];
  statistics$: Observable<any>;

  chartOption: echarts.EChartOption;

  ngOnInit() {

    this.statistics$ = this.UMService.listDayStatistic();
    this.statistics$.subscribe(val => {
      const xList = [],
        newUsers = [],
        totalUsers = [];
      val.reverse().forEach(item => {
        xList.push(item.registeredAt.substr(0, 10))
        newUsers.push(item.count);
      });

      for (let i = 0; i < newUsers.length; i++) {
        totalUsers.push(+newUsers[i] + (+totalUsers[i - 1] || 0));
      }

      this.theme.getJsTheme()
        .pipe(
          delay(1),
        )
        .subscribe(config => {
          const trafficTheme = config.variables.traffic;
          this.drawChart(xList, newUsers, totalUsers, trafficTheme);
        });
    });
  }

  drawChart(xList, newUsers, totalUsers, trafficTheme) {
    // 绘制图表

    this.chartOption = {
      title: {
        text: 'ECharts 入门示例',
        textStyle: {
          color: trafficTheme.tooltipTextColor,
        }
      },
      legend: {
        data: ['新增用户', '总用户'],
        textStyle: {
          color: trafficTheme.tooltipTextColor,
        }
      },
      tooltip: {
        textStyle: {
          color: trafficTheme.tooltipTextColor,
          fontWeight: trafficTheme.tooltipFontWeight,
          fontSize: 16,
        },
        position: 'top',
        backgroundColor: trafficTheme.tooltipBg,
        borderColor: trafficTheme.tooltipBorderColor,
        borderWidth: 3,
        extraCssText: trafficTheme.tooltipExtraCss,
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true }
        }
      },
      dataZoom: [
        {
          show: true,
          start: 0,
          end: 100
        }
      ],
      xAxis: {
        // type: "time",
        data: xList,
        axisLabel: {
          color: trafficTheme.tooltipTextColor
        }
      },
      yAxis: {
        boundaryGap: [0, '5%'],
        axisLine: {
          show: true,
        },
        axisLabel: {
          show: true,
          color: trafficTheme.tooltipTextColor,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: trafficTheme.colorBlack,
            opacity: 0.06,
            width: 1,
          },
        },
      },
      series: [
        {
          name: '新增用户',
          type: 'line',
          stack: 'one',
          data: newUsers,
          itemStyle: {
            normal: {
              color: trafficTheme.shadowLineVisible,
            },
            emphasis: {
              color: 'rgba(0,0,0,0)',
              borderColor: 'rgba(0,0,0,0)',
              borderWidth: 0,
            },
          },
          lineStyle: {
            normal: {
              width: 2,
              color: trafficTheme.shadowLineVisible,
            },
          },
        },
        {
          name: '总用户',
          type: 'line',
          stack: 'one',
          data: totalUsers,
          itemStyle: {
            normal: {
              color: trafficTheme.itemColor,
              borderColor: trafficTheme.itemBorderColor,
              borderWidth: 2,
            },
            emphasis: {
              color: 'white',
              borderColor: trafficTheme.itemEmphasisBorderColor,
              borderWidth: 2,
            },
          },
          lineStyle: {
            normal: {
              width: 2,
              color: trafficTheme.lineBg,
              shadowColor: trafficTheme.lineBg,
              shadowBlur: trafficTheme.lineShadowBlur,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: trafficTheme.gradFrom,
              }, {
                offset: 1,
                color: trafficTheme.gradTo,
              }]),
              opacity: 1,
            },
          },
        }
      ]
    };
  }

}

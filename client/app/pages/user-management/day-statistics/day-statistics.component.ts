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

  displayedColumns: string[] = ['registeredAt', 'registeredWeek', 'count', 'total'];

  allList: Array<any> = [];
  showList: Array<any> = [];

  chartOption: echarts.EChartOption;

  ngOnInit() {

    this.UMService.listDayStatistic().subscribe(val => {
      let xList = [],
        newUsers = [],
        totalUsers = [];
      val.reverse().forEach((item, index) => {
        xList.push(item.registeredAt.substr(0, 10))
        newUsers.push(item.count);
        let total = +item.count + (+totalUsers[index - 1] || 0);
        totalUsers.push(total);
        this.allList.push({ ...item, total: total });
      });
      this.allList = this.allList.reverse();
      this.pages = Math.ceil((this.allList.length) / this.limit);
      this.showList = this.allList.slice(this.pageIndex * this.limit, this.pageIndex * this.limit + this.limit);

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

  showChart: boolean = false;
  pages: number;
  pageIndex: number = 0;
  limit: number = 10;

  drawChart(xList, newUsers, totalUsers, trafficTheme) {
    // 绘制图表

    this.chartOption = {
      title: {
        text: '日增用户视图',
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

  prePage(isFirst: boolean = false) {
    if (!this.pageIndex) return;
    if (isFirst) {
      this.pageIndex = 0;
    }
    else {
      this.pageIndex -= 1;
    }
    this.showList = this.allList.slice(this.pageIndex * this.limit, this.pageIndex * this.limit + this.limit);
  }

  nextPage(isLast: boolean = false) {
    if (this.pageIndex == this.pages - 1) return;
    if (isLast) {
      this.pageIndex = this.pages - 1;
    }
    else {
      this.pageIndex += 1;
    }
    this.showList = this.allList.slice(this.pageIndex * this.limit, this.pageIndex * this.limit + this.limit);
  }
}

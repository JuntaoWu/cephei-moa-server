import { delay, takeWhile } from 'rxjs/operators';
import { AfterViewInit, Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../@core/data/layout.service';
import * as echarts from 'echarts';

@Component({
  selector: 'ngx-line-bar-chart',
  templateUrl: './line-bar-chart.component.html',
  styleUrls: ['./line-bar-chart.component.scss']
})
export class LineBarChartComponent implements OnInit {

  @Input() data: {xAxis: Array<string>, series: Object};

  private alive = false;

  echartsIntance: any;
  option: any = {};

  constructor(private theme: NbThemeService,
              private layoutService: LayoutService) {
    this.layoutService.onChangeLayoutSize()
      .pipe(
        takeWhile(() => this.alive),
      )
      .subscribe(() => this.resizeChart());
  }

  ngOnInit() {
    this.alive = true;
  }

  ngAfterViewInit() {
    this.theme.getJsTheme()
      .pipe(
        delay(1),
        takeWhile(() => this.alive),
      )
      .subscribe(config => {
        const trafficTheme: any = config.variables.traffic;

        console.log('chart data: ', this.data)
        const legendData = Object.keys(this.data.series);
        let seriesData = [];
        legendData.forEach(item => {
          seriesData.push({
            name: item,
            data: this.data.series[item],
            type: 'line',
            stack: 'one',
            symbol: 'circle',
            symbolSize: 8,
            sampling: 'average',
            // itemStyle: {
            //   normal: {
            //     color: trafficTheme.shadowLineDarkBg,
            //   },
            //   emphasis: {
            //     color: 'rgba(0,0,0,0)',
            //     borderColor: 'rgba(0,0,0,0)',
            //     borderWidth: 0,
            //   },
            // },
            // lineStyle: {
            //   normal: {
            //     width: 2,
            //     color: trafficTheme.shadowLineDarkBg,
            //   },
            // },
          })
        });

        this.option = Object.assign({}, {
          legend: {
            data: legendData,
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
            data: this.data.xAxis,
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
          series: seriesData,
        });
    });
  }

  onChartInit(echarts) {
    this.echartsIntance = echarts;
  }

  resizeChart() {
    if (this.echartsIntance) {
      this.echartsIntance.resize();
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }

}

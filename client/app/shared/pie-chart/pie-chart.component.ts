import { delay, takeWhile } from 'rxjs/operators';
import { AfterViewInit, Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../@core/data/layout.service';
import * as echarts from 'echarts';

@Component({
  selector: 'ngx-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  
  @Input() data: Array<{name: string, value: number}>;
  
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
        console.log('pie chart data: ', this.data);
        if (!!this.data) {
          this.option = Object.assign({}, {
            tooltip : {
              textStyle: {
                color: trafficTheme.tooltipTextColor,
                fontWeight: trafficTheme.tooltipFontWeight,
                fontSize: 16,
              },
              backgroundColor: trafficTheme.tooltipBg,
              borderColor: trafficTheme.tooltipBorderColor,
              extraCssText: trafficTheme.tooltipExtraCss,
              trigger: 'item',
              formatter: '{b} : {c} ({d}%)'
            },
            legend: {
              bottom: 10,
              data: this.data.map(v => v.name),
              textStyle: {
                color: trafficTheme.tooltipTextColor,
              }
            },
            series: [
              {
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data: this.data,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ],
          });
        }
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

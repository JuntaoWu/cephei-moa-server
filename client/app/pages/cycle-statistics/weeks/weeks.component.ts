import { Component, OnInit } from '@angular/core';
import { CycleStatisticsService } from '../cycle-statistics.service';

@Component({
  selector: 'app-weeks',
  templateUrl: './weeks.component.html',
  styleUrls: ['./weeks.component.scss']
})
export class WeeksComponent implements OnInit {

  constructor(private CSService: CycleStatisticsService) { }

  ngOnInit() {
    this.CSService.daysStatistic("weeks").subscribe(res => {
      console.log(res);
    });
  }
}

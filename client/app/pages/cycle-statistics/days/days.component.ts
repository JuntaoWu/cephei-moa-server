import { Component, OnInit } from '@angular/core';
import { CycleStatisticsService } from '../cycle-statistics.service';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})
export class DaysComponent implements OnInit {

  constructor(private CSService: CycleStatisticsService) { }

  ngOnInit() {
    this.CSService.daysStatistic().subscribe(res => {
      console.log(res);
    });
  }

}

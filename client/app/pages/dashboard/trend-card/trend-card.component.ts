import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trend-card',
  templateUrl: './trend-card.component.html',
  styleUrls: ['./trend-card.component.scss']
})
export class TrendCardComponent implements OnInit {

  @Input() label;
  @Input() value;
  @Input() trend: number[] = [];

  constructor() { }

  ngOnInit() {
  }

}

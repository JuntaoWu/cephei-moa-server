import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recent-user-card',
  templateUrl: './recent-user-card.component.html',
  styleUrls: ['./recent-user-card.component.scss']
})
export class RecentUserCardComponent implements OnInit {

  @Input() title;
  @Input() trafficData;

  constructor() { }

  ngOnInit() {
  }

}

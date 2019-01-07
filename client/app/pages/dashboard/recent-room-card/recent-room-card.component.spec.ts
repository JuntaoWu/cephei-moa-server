import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentRoomCardComponent } from './recent-room-card.component';

describe('RecentRoomCardComponent', () => {
  let component: RecentRoomCardComponent;
  let fixture: ComponentFixture<RecentRoomCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentRoomCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentRoomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

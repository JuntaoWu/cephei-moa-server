import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentUserCardComponent } from './recent-user-card.component';

describe('RecentUserCardComponent', () => {
  let component: RecentUserCardComponent;
  let fixture: ComponentFixture<RecentUserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentUserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

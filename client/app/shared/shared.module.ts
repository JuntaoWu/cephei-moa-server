import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DayOfWeekPipe } from 'app/pipes/day-of-week.pipe';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [
    DayOfWeekPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NbCardModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NbCardModule,
    DayOfWeekPipe,
  ]
})
export class SharedModule { }

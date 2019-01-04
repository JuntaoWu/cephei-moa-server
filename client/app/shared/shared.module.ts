import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DayOfWeekPipe } from 'app/pipes/day-of-week.pipe';
import { GenderPipe } from 'app/pipes/gender.pipe';
import { NbCardModule } from '@nebular/theme';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    DayOfWeekPipe,
    GenderPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NbCardModule,
    MatTableModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    NbCardModule,
    DayOfWeekPipe,
    GenderPipe,
  ]
})
export class SharedModule { }

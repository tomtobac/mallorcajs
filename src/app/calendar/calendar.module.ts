import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CalendarComponent],
  exports: [CalendarComponent]
})
export class CalendarModule { }

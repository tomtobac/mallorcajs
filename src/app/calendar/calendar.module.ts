import { MaterializeModule } from 'ng2-materialize';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule
  ],
  declarations: [CalendarComponent],
  exports: [CalendarComponent]
})
export class CalendarModule { }

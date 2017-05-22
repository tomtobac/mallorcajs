import { SharedModule } from './../shared/shared.module';
import { NewsModule } from './../news/news.module';
import { JobsModule } from './../jobs/jobs.module';
import { CalendarModule } from './../calendar/calendar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    CalendarModule,
    JobsModule,
    NewsModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }

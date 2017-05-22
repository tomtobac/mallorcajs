import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [JobsComponent],
  exports: [JobsComponent]
})
export class JobsModule { }

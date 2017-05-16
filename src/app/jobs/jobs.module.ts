import { MaterializeModule } from 'ng2-materialize';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule
  ],
  declarations: [JobsComponent],
  exports: [JobsComponent]
})
export class JobsModule { }

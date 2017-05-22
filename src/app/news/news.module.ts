import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';

@NgModule({
  imports: [
    CommonModule, 
    SharedModule
  ],
  declarations: [NewsComponent],
  exports: [NewsComponent]
})
export class NewsModule { }

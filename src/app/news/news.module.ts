import { MaterializeModule } from 'ng2-materialize';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';

@NgModule({
  imports: [
    CommonModule, 
    MaterializeModule
  ],
  declarations: [NewsComponent],
  exports: [NewsComponent]
})
export class NewsModule { }

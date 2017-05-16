import { MaterializeModule } from 'ng2-materialize';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterializeModule
  ],
  declarations: [ AppComponent ],
  exports: [ AppComponent ]
})
export class CoreModule { }

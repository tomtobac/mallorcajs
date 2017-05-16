import { AppComponent } from './core/app.component';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Vendor Modules */
import { MaterializeModule } from 'ng2-materialize';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    DashboardModule,
    MaterializeModule.forRoot()
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

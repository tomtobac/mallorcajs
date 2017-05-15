import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mz-navbar [navbarClass]="'blue'">
        <div class="brand-logo center">MallorcaJS</div>
    </mz-navbar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {

}

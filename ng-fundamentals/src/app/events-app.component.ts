import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `  
  //<events-list></events-list> - replaced by router-outlet and routes
})
export class EventsAppComponent {
  title = 'app';
}

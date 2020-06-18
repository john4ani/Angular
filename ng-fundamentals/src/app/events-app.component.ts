import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

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

  constructor(private auth: AuthService){}

  ngOnInit(){
    this.auth.checkAuthenticationStatus();
  }
}

import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {
    router.events
    .subscribe((event: NavigationStart) => {
      history.pushState(null, '', location.href);
      if (event.navigationTrigger === 'popstate') {
        console.log('Back button pressed');
        history.go(1);
        alert('Please use In-app Navigations');
      }
    });
  }
}

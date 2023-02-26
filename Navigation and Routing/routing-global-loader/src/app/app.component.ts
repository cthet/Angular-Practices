import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoadingRoute = false;

  constructor(private auth: AuthService, private router: Router) {
    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoadingRoute = true;
      }
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationError ||
        event instanceof NavigationCancel
      ) {
        this.isLoadingRoute = false;
      }
    });
  }

  get isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/auth']);
  }
}

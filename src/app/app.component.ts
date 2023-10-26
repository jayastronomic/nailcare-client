import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.authService.token$.subscribe((token) => {
      if (token) {
        this.authService.getAuthUser(token);
      } else {
        if (this.router.url.startsWith('/dashboard/'))
          this.router.navigate(['/']);
      }
    });
  }
}

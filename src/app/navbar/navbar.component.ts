import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoginRoute!: boolean;
  userLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe(() => {
      this.isLoginRoute = this.router.url === '/login';
    });
  }
  ngOnInit(): void {
    this.userLoggedIn = this.authService.isAuthenticated();
  }
}

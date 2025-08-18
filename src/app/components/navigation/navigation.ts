import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { Router, RouterModule } from '@angular/router';


import { routes } from '../../app.routes';


@Component({
  selector: 'app-navigation',
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  private router = inject(Router);
  routes = routes;

  onLogoClick() {
    this.router.navigate(['/']);
  }

  onNavigate(path: string) {
    this.router.navigate([path]);
  }
}

import { Component, Renderer2, OnDestroy, AfterViewInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../components/menu/menu.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, NavbarComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private routerEventSubscription!: Subscription;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.routerEventSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.showNavbarAndMenu()) {
          this.renderer.addClass(document.body, 'with-navbar-menu');
        } else {
          this.renderer.removeClass(document.body, 'with-navbar-menu');
        }
      }
    });
  }

  showNavbarAndMenu(): boolean {
    const noNavRoutes = ['/', '/forgot-password-screen', '/sign-in-screen'];
    return !noNavRoutes.includes(this.router.url);
  }

  ngOnDestroy(): void {
    this.routerEventSubscription.unsubscribe();
  }
}

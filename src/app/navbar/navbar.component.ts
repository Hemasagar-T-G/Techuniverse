import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(
    private router: Router
  ) {}

  navigateToAboutUs(): void {
    this.router.navigate(['/about-component']);
  }

  navigateToHome(): void {
    this.router.navigate(['/home-component'])
  }
  
  // To retrieve user name
  

}

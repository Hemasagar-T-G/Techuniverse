import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-link',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './course-link.component.html',
  styleUrl: './course-link.component.css'
})
export class CourseLinkComponent {

  constructor(
    private router: Router
  ) {}
  
  navigateToHome(): void {
    this.router.navigate(['/home-component'])
  }

  navigateToCourse(): void{
    this.router.navigate(['/course-component'])
  }

}

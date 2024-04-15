import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  constructor(
    private router: Router
  ) {}

  navigateToHome(): void {
    this.router.navigate(['/home-component'])
  }

  navigateToCourseLink(): void{
    this.router.navigate(['/courselink-component'])
  }
  
}

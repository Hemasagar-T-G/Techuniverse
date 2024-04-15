import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { CourseLinkComponent } from './course-link/course-link.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'navbar-component',component:NavbarComponent},
    {path:'home-component', component: HomeComponent},
    {path:'course-component', component: CourseComponent},
    {path:'about-component', component: AboutComponent},
    {path:'courselink-component', component: CourseLinkComponent}
];

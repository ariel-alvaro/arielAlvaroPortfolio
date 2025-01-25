import { Routes } from '@angular/router';
import { EducationComponent } from '@features/principalmenu/components/education/education.component';
import { HomeComponent } from '@features/principalmenu/components/home/home.component';
import { LaboralComponent } from '@features/principalmenu/components/laboral/laboral.component';
import { ProjectsComponent } from '@features/principalmenu/components/projects/projects.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "projects", component: ProjectsComponent},
    {path: "education", component: EducationComponent},
    {path: "experience", component: LaboralComponent},
    {path: "", redirectTo: '/home', pathMatch: "full"},
];

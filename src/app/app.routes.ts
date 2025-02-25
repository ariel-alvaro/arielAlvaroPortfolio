import { Routes } from '@angular/router';
import { EducationComponent } from '@features/principalmenu/components/education/education.component';
import { HomeComponent } from '@features/principalmenu/components/home/home.component';
import { ProjectsComponent } from '@features/principalmenu/components/projects/projects.component';
import { ResumeComponent } from '@features/principalmenu/components/resume/resume.component';
import { SkillsComponent } from '@features/principalmenu/components/skills/skills.component';

export const routes: Routes = [
    {path: "home", loadComponent: () => import("./features/principalmenu/components/home/home.component").then(m => m.HomeComponent)},
    {path: "skills", loadComponent: () => import("./features/principalmenu/components/skills/skills.component").then(m => m.SkillsComponent)},
    {path: "projects", loadComponent: () => import("./features/principalmenu/components/projects/projects.component").then(m => m.ProjectsComponent)},
    {path: "education", loadComponent: () => import("./features/principalmenu/components/education/education.component").then(m => m.EducationComponent)},
    {path: "resume", loadComponent: () => import("./features/principalmenu/components/resume/resume.component").then(m => m.ResumeComponent)},
    {path: "", redirectTo: '/home', pathMatch: "full"},
];


// export const routes: Routes = [
//     {path: "home", component: HomeComponent},
//     {path: "skills", component: SkillsComponent},
//     {path: "projects", component: ProjectsComponent},
//     {path: "education", component: EducationComponent},
//     {path: "resume", component: ResumeComponent},
//     {path: "", redirectTo: '/home', pathMatch: "full"},
// ];

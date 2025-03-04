import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import project from '@features/principalmenu/interfaces/principalSection.interfaces';
import { ProjectDescriptionComponent } from "../project-description/project-description.component";
import { MenuOption } from '@features/principalmenu/enums/menu.enum';
import { PrincipalMenuService } from '@features/principalmenu/services/principal-menu.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectDescriptionComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    actualProject: project
    constructor(public principal_service: PrincipalMenuService){
        this.principal_service.setSelection(MenuOption.projects)
    }

    projects: project[] = [
        {
            name: "Law Firm Web App",
            year: 2024,
            description: "Web application for a law firm, with a frontend designed to display informational sections as well as provide a live chat (websockets) for users to communicate with the firm's owners. Additionally, administrators have a dashboard to manage and connect to these chats, which are stored in the database",
            imageUrl: "/projects/lawfirm.png",
            iconUrl: "/Sprites/law.png",
            liveUrl: "https://estudiojuridicoad.com",
            tecnologies: [ 
                { name: "Python",imageUrl: "/Skills/python.png" },
                { name: "Django",imageUrl: "/Skills/django.png" },
                { name: "MySql",imageUrl: "/Skills/mysql.png" },
                { name: "Typescript",imageUrl: "/Skills/typescript.png" },
                { name: "Astro",imageUrl: "/Skills/astro.png" },
                { name: "React",imageUrl: "/Skills/react.png" },
                { name: "Docker",imageUrl: "/Skills/docker.png" },
                { name: "Nginx",imageUrl: "/Skills/nginx.png" }]
        }
    ];

    setProject(project: project) {
        this.actualProject = project
    }

    closeProject() {
        this.actualProject = null
    }

}

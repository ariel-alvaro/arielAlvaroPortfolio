import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Skill } from '@features/sidemenu/interfaces/sidemenu.interfaces';
import { DescriptionDirective } from 'src/app/shared/directives/description/description.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, DescriptionDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

    skills: Skill[] = [
            { name: "C", level: 60, maxLevel: 99, iconUrl: "/Skills/c.png" },
            { name: "C++", level: 2, maxLevel: 99, iconUrl: "/Skills/c++.png" },
            { name: "C#", level: 21, maxLevel: 99, iconUrl: "/Skills/csharp.png" },
            { name: "Python", level: 80, maxLevel: 99, iconUrl: "/Skills/python_icon.png" },
            { name: "Java", level: 15, maxLevel: 99, iconUrl: "/Skills/java.png" },
            { name: "Go", level: 10, maxLevel: 99, iconUrl: "/Skills/go.png" },
            { name: "HTML5", level: 70, maxLevel: 99, iconUrl: "/Skills/HTML5.png" },
            { name: "CSS", level: 45, maxLevel: 99, iconUrl: "/Skills/CSS.png" },
            { name: "Javascript", level: 82, maxLevel: 99, iconUrl: "/Skills/javascript.png" },
            { name: "Typescript", level: 82, maxLevel: 99, iconUrl: "/Skills/typescript.png" },
            { name: "Haskell", level: 12, maxLevel: 99, iconUrl: "/Skills/haskell.png" },
            { name: "Scala", level: 3, maxLevel: 99, iconUrl: "/Skills/scala.png" },
            { name: "Assembler", level: 17, maxLevel: 99, iconUrl: "/Skills/assembler.png" },
            { name: "Fastapi", level: 43, maxLevel: 99, iconUrl: "/Skills/fastapi.png" },
            { name: "Django", level: 64, maxLevel: 99, iconUrl: "/Skills/django.png" },
            { name: "Aspnet", level: 10, maxLevel: 99, iconUrl: "/Skills/aspnet.png" },
            { name: "Spring", level: 0, maxLevel: 99, iconUrl: "/Skills/spring.png" },
            { name: "Angular", level: 50, maxLevel: 99, iconUrl: "/Skills/angular.png" },
            { name: "React", level: 70, maxLevel: 99, iconUrl: "/Skills/react.png" },
            { name: "Nginx", level: 25, maxLevel: 99, iconUrl: "/Skills/nginx.png" },
            { name: "Docker", level: 33, maxLevel: 99, iconUrl: "/Skills/docker.png" },
            { name: "Git", level: 58, maxLevel: 99, iconUrl: "/Skills/git.png" },
            { name: "Dessing Pattern", level: 7, maxLevel: 99, iconUrl: "/Skills/pattern.png" },
            { name: "Linux", level: 80, maxLevel: 99, iconUrl: "/Skills/linux.png" }
      ];
      
}

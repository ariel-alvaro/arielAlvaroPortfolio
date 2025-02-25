import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { MenuOption } from '@features/principalmenu/enums/menu.enum';
import project from '@features/principalmenu/interfaces/principalSection.interfaces';
import { PrincipalMenuService } from '@features/principalmenu/services/principal-menu.service';
import { DescriptionDirective } from 'src/app/shared/directives/description/description.directive';

@Component({
  selector: 'app-project-description',
  standalone: true,
  imports: [CommonModule, DescriptionDirective],
  templateUrl: './project-description.component.html',
  styleUrl: './project-description.component.css'
})
export class ProjectDescriptionComponent {
    @Input() project: project 

}

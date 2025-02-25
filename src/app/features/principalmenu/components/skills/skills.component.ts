import { Component } from '@angular/core';
import { MenuOption } from '@features/principalmenu/enums/menu.enum';
import { PrincipalMenuService } from '@features/principalmenu/services/principal-menu.service';
import { DescriptionDirective } from 'src/app/shared/directives/description/description.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [DescriptionDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

    constructor(public principal_service: PrincipalMenuService){
        this.principal_service.setSelection(MenuOption.skills)
    }
}

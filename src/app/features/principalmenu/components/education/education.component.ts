import { Component } from '@angular/core';
import { MenuOption } from '@features/principalmenu/enums/menu.enum';
import { PrincipalMenuService } from '@features/principalmenu/services/principal-menu.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
    constructor(public principal_service: PrincipalMenuService){
        this.principal_service.setSelection(MenuOption.education)
    }
}

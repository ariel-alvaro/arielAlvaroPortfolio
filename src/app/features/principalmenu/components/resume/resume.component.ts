import { Component } from '@angular/core';
import { MenuOption } from '@features/principalmenu/enums/menu.enum';
import { PrincipalMenuService } from '@features/principalmenu/services/principal-menu.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
    constructor(public principal_service: PrincipalMenuService){
        this.principal_service.setSelection(MenuOption.resume)
    }
}

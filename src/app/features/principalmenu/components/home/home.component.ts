import { Component } from '@angular/core';
import { MenuOption } from '@features/principalmenu/enums/menu.enum';
import { PrincipalMenuService } from '@features/principalmenu/services/principal-menu.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  constructor(public principal_service: PrincipalMenuService){
    this.principal_service.setSelection(MenuOption.home)
  }


}

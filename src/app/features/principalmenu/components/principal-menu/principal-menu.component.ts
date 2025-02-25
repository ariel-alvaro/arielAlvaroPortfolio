import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MenuOption } from '@features/principalmenu/enums/menu.enum';
import { PrincipalMenuService } from '@features/principalmenu/services/principal-menu.service';

@Component({
  selector: 'app-principal-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './principal-menu.component.html',
  styleUrl: './principal-menu.component.css'
})
export class PrincipalMenuComponent {

    constructor(public principal_service: PrincipalMenuService){}
}

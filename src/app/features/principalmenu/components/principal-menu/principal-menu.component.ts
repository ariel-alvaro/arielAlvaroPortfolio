import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MenuOption } from '@features/principalmenu/enums/menu.enum';

@Component({
  selector: 'app-principal-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './principal-menu.component.html',
  styleUrl: './principal-menu.component.css'
})
export class PrincipalMenuComponent {
    selection: string = MenuOption.home

    setSelection(option: string) {
        this.selection = option
    }


}

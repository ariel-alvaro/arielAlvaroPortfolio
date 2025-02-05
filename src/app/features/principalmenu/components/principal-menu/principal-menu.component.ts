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
    route: string = MenuOption.home
    


    setSelection(option: string) {
        this.route = option
    }

    getRoute() {
        const path = window.location.href
        
        let url = path.replace(/\/$/, '');
        this.route = url.split('/').pop();
    }

    ngOnInit() {
        this.getRoute()
    }

}

import { Component, Input } from '@angular/core';
import NavOption from '@features/sidemenu/interfaces/sidemenu.interfaces';

@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [],
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.css'
})
export class MenuHeaderComponent {
    @Input() option?: NavOption 
}

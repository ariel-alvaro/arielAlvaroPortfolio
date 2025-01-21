import { Component } from '@angular/core';
import { DescriptionDirective } from 'src/app/shared/directives/description/description.directive';

@Component({
  selector: 'app-minimap',
  standalone: true,
  imports: [DescriptionDirective],
  templateUrl: './minimap.component.html',
  styleUrl: './minimap.component.css'
})
export class MinimapComponent {

}

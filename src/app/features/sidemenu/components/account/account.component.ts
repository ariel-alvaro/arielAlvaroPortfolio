import { Component } from '@angular/core';
import { DescriptionDirective } from 'src/app/shared/directives/description/description.directive';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [DescriptionDirective],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

}

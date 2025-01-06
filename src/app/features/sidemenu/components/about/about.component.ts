import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DescriptionDirective } from 'src/app/shared/directives/description/description.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, DescriptionDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}

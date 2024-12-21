import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navoption',
  standalone: true,
  imports: [],
  templateUrl: './navoption.component.html',
  styleUrl: './navoption.component.css'
})
export class NavoptionComponent {

    @Input() imageUrl: string = "/Sprites/Skills.png"
}

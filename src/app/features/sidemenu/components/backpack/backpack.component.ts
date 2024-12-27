import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-backpack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backpack.component.html',
  styleUrl: './backpack.component.css'
})
export class BackpackComponent {

    n: number[] = [1,2,3,4,5,6,7,8,1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3]

}

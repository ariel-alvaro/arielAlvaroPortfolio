import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import NavOption from '@features/sidemenu/interfaces/sidemenu.interfaces';
import { NavoptionComponent } from '../navoption/navoption.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, NavoptionComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
    
    @Input() options: NavOption[] = []

    @Output() optionSelected = new EventEmitter<number>()


    notifyChange(id: number) {
        this.optionSelected.emit(id)
    }
    



}

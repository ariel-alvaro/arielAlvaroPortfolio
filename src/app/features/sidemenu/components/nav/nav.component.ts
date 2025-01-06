import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { NavOption } from '@features/sidemenu/interfaces/sidemenu.interfaces';
import { CommonModule } from '@angular/common';
import { NavType } from '@features/sidemenu/enums/optionType.enum';
import { DescriptionDirective } from 'src/app/shared/directives/description/description.directive';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, DescriptionDirective],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
    
    @Input() options: NavOption[] = []
    @Input() type: NavType = NavType.upper
    @Output() optionSelected = new EventEmitter<NavOption>()

    selected: number

    readonly navEnum = NavType
    
    notifyChange(option: NavOption) {
        this.optionSelected.emit(option)
    }

    changeSelection(option: NavOption) {
        this.selected = option.id
        this.notifyChange(option)
    }
    



}

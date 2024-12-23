import { Component, ElementRef, TemplateRef, ViewChild, viewChild } from '@angular/core';

//Components
import { NavoptionComponent } from '@features/sidemenu/components/navoption/navoption.component';

//Modules
import { CommonModule } from '@angular/common';

//Interfaces
import NavOption from '@features/sidemenu/interfaces/sidemenu.interfaces';
import { SkillsComponent } from "../skills/skills.component";
import { SettingsComponent } from "../settings/settings.component";
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NavoptionComponent, CommonModule, SkillsComponent, SettingsComponent, NavComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
    @ViewChild('skills') skills!: TemplateRef<any>
    @ViewChild('settings') settings!: TemplateRef<any>
    selection: any = ""
    

    sections: TemplateRef<any>[] = [] // templates refs


    options: NavOption[] = [
        {id: 0, description: "skills", imageUrl:"Sprites/Skills.png"},
        {id: 1, description: "backpack", imageUrl:"Sprites/Skills.png"},
        {id: 2, description: "settings", imageUrl:"Sprites/Skills.png"},
        {id: 3, description: "example", imageUrl:"Sprites/Skills.png"},
    ]
    

    // Update the selected template option
    updateSelection(id: number) {
        console.log(id)
        this.selection = this.sections[id]
        console.log(this.selection)
    }
    
    ngAfterViewInit() {
        this.sections = [this.skills, this.settings];
    }

}

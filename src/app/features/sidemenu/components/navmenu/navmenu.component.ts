import { Component, ElementRef, TemplateRef, ViewChild, viewChild } from '@angular/core';

//Components
import { NavoptionComponent } from '@features/sidemenu/components/navoption/navoption.component';

//Modules
import { CommonModule } from '@angular/common';

//Interfaces
import NavOption from '@features/sidemenu/interfaces/sidemenu.interfaces';
import { SkillsComponent } from "../skills/skills.component";
import { SettingsComponent } from "../settings/settings.component";

@Component({
  selector: 'app-navmenu',
  standalone: true,
  imports: [NavoptionComponent, CommonModule, SkillsComponent, SettingsComponent],
  templateUrl: './navmenu.component.html',
  styleUrl: './navmenu.component.css'
})
export class NavMenuComponent {
    @ViewChild('skills') skills!: TemplateRef<any>
    @ViewChild('settings') settings!: TemplateRef<any>
    selection: any = ""
    sections: TemplateRef<any>[] = []
    options: NavOption[] = [
        {id: 0, description: "skills", imageUrl:"Sprites/Skills.png"},
        {id: 1, description: "backpack", imageUrl:"Sprites/Skills.png"},
        {id: 2, description: "settings", imageUrl:"Sprites/Skills.png"},
        {id: 3, description: "example", imageUrl:"Sprites/Skills.png"},
    ]
    
    
    ngAfterViewInit() {
        this.sections = [this.skills, this.settings];
    }

    updateSelection(id: number) {
        this.selection = this.sections[id]
        console.log(this.selection)
    }

}

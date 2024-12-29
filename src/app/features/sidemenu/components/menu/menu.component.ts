import { Component, ElementRef, TemplateRef, ViewChild, viewChild } from '@angular/core';

//Components


//Modules
import { CommonModule } from '@angular/common';

//Interfaces
import { NavOption } from '@features/sidemenu/interfaces/sidemenu.interfaces';
import { SkillsComponent } from "../skills/skills.component";
import { SettingsComponent } from "../settings/settings.component";
import { NavComponent } from "../nav/nav.component";
import { MenuHeaderComponent } from "../menu-header/menu-header.component";
import { NavType } from '@features/sidemenu/enums/optionType.enum';
import { BackpackComponent } from "../backpack/backpack.component";
import { SummaryComponent } from "../summary/summary.component";
import { AboutComponent } from "../about/about.component";
import { AccountComponent } from "../account/account.component";
import { MusicComponent } from "../music/music.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, SkillsComponent, SettingsComponent, NavComponent, MenuHeaderComponent, BackpackComponent, SummaryComponent, AboutComponent, AccountComponent, MusicComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
    @ViewChild('skills') skills: TemplateRef<any>
    @ViewChild('backpack') backpack: TemplateRef<any>
    @ViewChild('summary') summary: TemplateRef<any>
    @ViewChild('about') about: TemplateRef<any>
    @ViewChild('account') account: TemplateRef<any>
    @ViewChild('music') music: TemplateRef<any>
    @ViewChild('settings') settings: TemplateRef<any>

    readonly navEnum = NavType;

    upperOptions: NavOption[] = [
        {id: 0, description: "skills", imageUrl:"Sprites/Skills.png", headerImageUrl: ""},
        {id: 1, description: "backpack", imageUrl:"Sprites/backpack.png", headerImageUrl: ""},
        {id: 2, description: "summary", imageUrl:"Sprites/summary.png", headerImageUrl: ""},
    ]
    
    bottomOptions: NavOption[] = [
        {id: 3, description: "about", imageUrl:"Sprites/about.png", headerImageUrl: "", color:'#204439'},
        {id: 4, description: "social", imageUrl:"Sprites/social.png", headerImageUrl: "", color:"#672330"},
        {id: 5, description: "music", imageUrl:"Sprites/music.png", headerImageUrl: "", color:"#7b3a1c"},
        {id: 6, description: "settings", imageUrl:"Sprites/settings.png", headerImageUrl: ""},
    ]

    selection: NavOption = {id: 0, description: "skills", imageUrl:"Sprites/Skills.png", headerImageUrl: ""}
    selectedTemplate: TemplateRef<any> | null = null 

    sections: TemplateRef<any>[] = [] // templates refs

    // Update the selected template option
    updateSelection(id: number) {
        console.log(id)
        this.selectedTemplate = this.sections[id]
        console.log(this.selectedTemplate)
    }
    
    ngAfterViewInit() {
        this.sections = [this.skills, this.backpack, this.summary, this.about, this.account, this.music, this.settings];
        this.selectedTemplate = this.music //borrar
    }


}

import { ChangeDetectorRef, Component, ElementRef, TemplateRef, ViewChild, viewChild } from '@angular/core';

//Components


//Modules
import { CommonModule } from '@angular/common';

//Interfaces
import { NavOption } from '@features/sidemenu/interfaces/sidemenu.interfaces';
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
  imports: [CommonModule, SettingsComponent, NavComponent, MenuHeaderComponent, BackpackComponent, SummaryComponent, AboutComponent, AccountComponent, MusicComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

    @ViewChild('backpack') backpack: TemplateRef<any>
    @ViewChild('summary') summary: TemplateRef<any>
    @ViewChild('about') about: TemplateRef<any>
    @ViewChild('account') account: TemplateRef<any>
    @ViewChild('music') music: TemplateRef<any>
    @ViewChild('settings') settings: TemplateRef<any>

    readonly navEnum = NavType;


    upperOptions: NavOption[] = [
        {id: 0, description: "backpack", imageUrl:"Sprites/backpack.png", headerImageUrl: ""},
        {id: 1, description: "summary", imageUrl:"Sprites/summary.png", headerImageUrl: ""},
    ]

    bottomOptions: NavOption[] = [
        {id: 2, description: "about", imageUrl:"Sprites/about.png", headerImageUrl: "", color:'#204439'},
        {id: 3, description: "contact", imageUrl:"Sprites/social.png", headerImageUrl: "", color:"#672330"},
        {id: 4, description: "music", imageUrl:"Sprites/music.png", headerImageUrl: "", color:"#7b3a1c"},
        {id: 5, description: "settings", imageUrl:"Sprites/settings.png", headerImageUrl: ""},
    ]

    selection: NavOption = this.bottomOptions[0]
    selectedTemplate: TemplateRef<any> | null = null

    sections: TemplateRef<any>[] = [] // templates refs

    constructor(private change_detect: ChangeDetectorRef) {}

    // Update the selected template option
    updateSelection(option: NavOption) {

        this.selection = option
        this.selectedTemplate = this.sections[option.id]

    }

    ngAfterViewInit() {
        this.sections = [this.backpack, this.summary, this.about, this.account, this.music, this.settings];
        this.selectedTemplate = this.about
        this.change_detect.detectChanges()
    }


}

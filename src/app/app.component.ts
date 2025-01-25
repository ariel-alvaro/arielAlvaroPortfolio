import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrameComponent } from './core/layaout/components/frame/frame.component';
import { TitleComponent } from "./core/layaout/components/title/title.component";
import { MenuComponent } from "./features/sidemenu/components/menu/menu.component";
import { CommonModule } from '@angular/common';
import { DescriptionDirective } from './shared/directives/description/description.directive';
import { DescriptionService } from './shared/services/description.service';
import { ResizeListenerDirective } from './shared/directives/resize/resize.directive';
import { DescriptorComponent } from './shared/components/descriptor/descriptor.component';
import { MinimapComponent } from "./features/minimap/components/minimap/minimap.component";
import { PrincipalMenuComponent } from "./features/principalmenu/components/principal-menu/principal-menu.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FrameComponent, TitleComponent, MenuComponent, DescriptionDirective, DescriptorComponent, CommonModule, ResizeListenerDirective, MinimapComponent, PrincipalMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'arielAlvaroPortfolio';

    constructor(public description_service: DescriptionService) {
    }


}

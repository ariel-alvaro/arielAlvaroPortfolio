import { Component, ElementRef, ViewChild } from '@angular/core';

import { MenuComponent } from "./features/sidemenu/components/menu/menu.component";
import { CommonModule } from '@angular/common';
import { DescriptionService } from './shared/services/description.service';
import { ResizeListenerDirective } from './shared/directives/resize/resize.directive';
import { DescriptorComponent } from './shared/components/descriptor/descriptor.component';
import { MinimapComponent } from "./features/minimap/components/minimap/minimap.component";
import { PrincipalMenuComponent } from "./features/principalmenu/components/principal-menu/principal-menu.component";
import { ContactMenuComponent } from "./features/contact/components/contact-menu/contact-menu.component";
import { provideHttpClient } from '@angular/common/http';
import { PreloadService } from './core/services/preload.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MenuComponent,
    DescriptorComponent,
    CommonModule,
    ResizeListenerDirective,
    MinimapComponent,
    PrincipalMenuComponent,
    ContactMenuComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'arielAlvaroPortfolio';

    constructor(public description_service: DescriptionService,
                public preload_service: PreloadService
    ) {}


    async preloadImages() {
 
      await this.preload_service.loadImages();

    }

    async ngOnInit() {

      this.preloadImages()
      

    }
}

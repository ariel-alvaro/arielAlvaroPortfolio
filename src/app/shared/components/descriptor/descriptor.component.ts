import { Component, ElementRef, ViewChild } from '@angular/core';
import { DescriptionService } from '../../services/description.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-descriptor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './descriptor.component.html',
  styleUrl: './descriptor.component.css'
})
export class DescriptorComponent {
    @ViewChild("descriptor") descriptor: ElementRef
    constructor(public description_service: DescriptionService) {

    }

    setDescriptorWidth() {
        if(this.descriptor) {
            this.description_service.setDescriptorWidth(this.descriptor.nativeElement.getBoundingClientRect().width)
        }
    }

    ngAfterContentChecked() {
        this.setDescriptorWidth()
    }

}

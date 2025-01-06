import { Directive, ElementRef, HostListener } from '@angular/core';
import { DescriptionService } from '../../services/description.service';

@Directive({
  selector: '[ResizeListener]',
  standalone: true
})
export class ResizeListenerDirective {

    width: number
    height: number

    constructor(private elem: ElementRef,
                private description_service?: DescriptionService) { }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event): void {
        this.updateDimensions();
    }


    updateDimensions(): void {
        const rect = this.elem.nativeElement.getBoundingClientRect();
        this.description_service.setDimensions(rect)

    }
    
    ngOnInit() {
        this.updateDimensions()
    }
}

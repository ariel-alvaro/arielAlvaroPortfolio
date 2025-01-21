import { Directive, HostListener, Input, input } from '@angular/core';
import { DescriptionService } from '../../services/description.service';

@Directive({
  selector: '[Description]',
  standalone: true
})
export class DescriptionDirective {

    @Input() Description: string
    constructor(private description_service?: DescriptionService) { }
    
    @HostListener('pointerenter') onMouseEnter() {
        this.showDescriptor(true)
        this.setDescriptions()
    }
  
    @HostListener('pointerleave') onMouseLeave() {
        this.showDescriptor(false)
    }

    @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
        // this.description_service.setShow(true)
        this.setMousePosition(event.clientX, event.clientY)
    }
    
    // Set show value to true
    showDescriptor(value: boolean) {
        this.description_service.setShow(value)
    }
    
    //Set actual input description to the service
    setDescriptions() {
        const [description, element] = this.Description.split("|")
        this.description_service.setDescriptionElement(description, element)
    }
    
    //Set actual mouse position
    setMousePosition(x: number, y: number) {
        this.description_service.setMousePosition(x + 16 , y + 16) 
    }
}

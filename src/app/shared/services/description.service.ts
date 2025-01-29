import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

    constructor() { }

    frameRect: DOMRect
    descriptorWidht: number

    mouseX: number
    mouseY: number

    show: boolean = false

    description: string
    element: string

    setDimensions(rect: DOMRect) {
        this.frameRect = rect
    }

    setDescriptorWidth(width: number) {
        this.descriptorWidht = width

    }

    setShow(value: boolean) {
        this.show = value

    }

    setMousePosition(x: number, y:number) {
        this.mouseX = Math.min(Math.max(x, this.frameRect.left), this.frameRect.right - this.descriptorWidht); 
        this.mouseY = Math.min(Math.max(y, this.frameRect.top), this.frameRect.bottom - this.descriptorWidht)
    }
    

    setDescriptionElement(description: string, element: string) {
    
        this.description = description
        this.element = element
    }


}

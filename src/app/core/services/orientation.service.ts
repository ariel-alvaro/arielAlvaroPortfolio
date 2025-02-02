import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrientationService {

    width: number = window.innerWidth
    height: number = window.innerHeight

    isHorizontal: boolean

    constructor() { 
        this.setOrientation(this.width, this.height)
        this.listenToViewport()
    }

    listenToViewport() {
        fromEvent(window, 'resize').subscribe((x) => {
            this.setOrientation(window.innerWidth, window.innerHeight)
            console.log(this.isHorizontal)
        })
    }

    setOrientation(width: number, height: number): void {
        this.isHorizontal = width > height
    }
}

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MusicService {
    audio = new Audio()
    playingSong: string = ""
    paused: boolean = false


    play(name: string, url: string) {
        this.playingSong = name
        this.audio.src = url
        this.audio.volume = 0.2
        this.audio.load()
        this.audio.play()
    }

    pause() {
        this.audio.pause()
    }

}

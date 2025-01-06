import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

const START_VOLUME = 0.2 // 5% 

@Injectable({
    providedIn: 'root'
})
export class MusicService {
    audio = new Audio()
    playingSong: string = ""
    paused: boolean = false
    volume: number = START_VOLUME


    public play(name: string, url: string) {
        this.setPlayingSong(name)
        this.setAudioVolume(this.volume)

        this.audio.src = url
        this.audio.load()
        this.audio.play()
    }



    public pause() {
        this.setPaused(true)
        this.audio.pause()
    }

    public resume() {
        this.setPaused(false)
        this.audio.play()
    }

    public setAudioVolume(value: number) {
        this.volume = value
        this.audio.volume = value
    }

    public setVolume(value: number) {
        this.volume = value
    }
    private setPaused(value: boolean) {
        if (this.playingSong == ""){
            return
        }

        this.paused = value
    }

    private setPlayingSong(value: string) {
        this.playingSong = value
    }

 }

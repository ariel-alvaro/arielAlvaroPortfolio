import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Track } from '@features/sidemenu/interfaces/sidemenu.interfaces';
import { MusicService } from '@features/sidemenu/services/music.service';
import { audit, fromEvent } from 'rxjs';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {

    playingTrackId: number 

    tracks: Track[] = [
        {
            id: 0,
            name: "Scape Main",
            url: "https://oldschool.runescape.wiki/images/Scape_Main.ogg?1f5d7"
        },
        {
            id: 1,
            name: "Harmony",
            url: "https://oldschool.runescape.wiki/images/Harmony.ogg?3c785"
        },
        {
            id: 2,
            name: "Autumn Voyage",
            url: "https://oldschool.runescape.wiki/images/Autumn_Voyage.ogg?87eab"
        },
        {
            id: 3,
            name: "Yesteryear",
            url: "https://oldschool.runescape.wiki/images/Yesteryear.ogg?03b03"
        }
    ]
    
    constructor(public music_service: MusicService) {}

    // Play a song
    play(id: number) {
        console.log("track id ", id)
        let track: Track = this.tracks[id]

        this.playingTrackId = track.id
        this.music_service.play(track.name, track.url)
    }

    //Plays the next song in the list
    playNextSong() {
        let tracksNumber: number = this.tracks.length

        // If next hashId is lower that total tracks then play next
        if (this.playingTrackId + 1 < tracksNumber) {
            this.playingTrackId += 1
            this.play(this.playingTrackId)

            return
        }


        this.playingTrackId = 0
        this.play(this.playingTrackId)

    }

    songEnded() {
        // Notify when song ends
        fromEvent(this.music_service.audio, 'ended').subscribe(() => {
            this.playNextSong()
        });
    }

    ngOnInit() {
        this.songEnded()
    }
}

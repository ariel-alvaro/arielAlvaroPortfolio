import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Track } from '@features/sidemenu/interfaces/sidemenu.interfaces';
import { MusicService } from '@features/sidemenu/services/music.service';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {

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


    play(id: number) {

        let track: Track = this.tracks[id]

        this.music_service.play(track.name, track.url)
    }

}

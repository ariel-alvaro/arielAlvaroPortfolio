import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Track } from '@features/sidemenu/interfaces/sidemenu.interfaces';
import { MusicService } from '@features/sidemenu/services/music.service';
import { fromEvent } from 'rxjs';
import { DescriptionDirective } from 'src/app/shared/directives/description/description.directive';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule, DescriptionDirective],
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
        },
        {
            id: 4,
            name: "Sea Shanty",
            url: "https://oldschool.runescape.wiki/images/transcoded/Sea_Shanty_%28v1%29.ogg/Sea_Shanty_%28v1%29.ogg.mp3"
        },
        {
            id: 5,
            name: "Medieval",
            url: "https://oldschool.runescape.wiki/images/transcoded/Medieval_%28v1%29.ogg/Medieval_%28v1%29.ogg.mp3"
        },
        {
            id: 6,
            name: "Magic Dance",
            url: "https://oldschool.runescape.wiki/images/transcoded/Magic_Dance_%28v1%29.ogg/Magic_Dance_%28v1%29.ogg.mp3"
        },
        {
            id: 7,
            name: "Splendour",
            url: "https://oldschool.runescape.wiki/images/transcoded/Splendour_%28v1%29.ogg/Splendour_%28v1%29.ogg.mp3"
        },
        {
            id: 8,
            name: "Garden",
            url: "https://oldschool.runescape.wiki/images/transcoded/Garden_%28v1%29.ogg/Garden_%28v1%29.ogg.mp3"
        },
        {
            id: 9,
            name: "Shadowland",
            url: "https://oldschool.runescape.wiki/images/Shadowland_%28v1%29.ogg?54afd"
        },
        {
            id: 10,
            name: "Scape soft",
            url: "https://oldschool.runescape.wiki/images/transcoded/Scape_Soft_%28v1%29.ogg/Scape_Soft_%28v1%29.ogg.mp3"
        },
        {
            id: 11,
            name: "Adventure",
            url: "https://oldschool.runescape.wiki/images/transcoded/Adventure_%28v1%29.ogg/Adventure_%28v1%29.ogg.mp3"
        },
        {
            id: 12,
            name: "Baroque",
            url: "https://oldschool.runescape.wiki/images/Baroque_%28v1%29.ogg?2bc94"
        },
        {
            id: 13,
            name: "Newbie Melody",
            url: "https://oldschool.runescape.wiki/images/transcoded/Newbie_Melody_%28v1%29.ogg/Newbie_Melody_%28v1%29.ogg.mp3"
        },
        {
            id: 14,
            name: "Camelot",
            url: "https://oldschool.runescape.wiki/images/transcoded/Camelot_%28v1%29.ogg/Camelot_%28v1%29.ogg.mp3"
        },
        {
            id: 15,
            name: "Greatness",
            url: "https://oldschool.runescape.wiki/images/transcoded/Greatness_%28v1%29.ogg/Greatness_%28v1%29.ogg.mp3"
        }

    ]

    constructor(public music_service: MusicService) {}

    // Play a song with hash id number
    play(id: number) {
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

import { Component } from '@angular/core';
import { MusicService } from '@features/sidemenu/services/music.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

    constructor(public music_service: MusicService) {}


    changeVolume(event: Event) {
        let input = event.target as HTMLInputElement;
        let volume_value = Number(input.value) / 100 
        this.music_service.setAudioVolume(volume_value)
    }
}

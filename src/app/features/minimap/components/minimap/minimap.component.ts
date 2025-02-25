import { Component } from '@angular/core';
import { MinimapService } from '@features/minimap/services/minimap.service';
import { DescriptionDirective } from 'src/app/shared/directives/description/description.directive';

@Component({
  selector: 'app-minimap',
  standalone: true,
  imports: [DescriptionDirective],
  templateUrl: './minimap.component.html',
  styleUrl: './minimap.component.css'
})
export class MinimapComponent {

    repo_url: string = `https://api.github.com/repos/AlvaroAriel/arielAlvaroPortfolio`
    repo_stars: number = 0

    constructor(private minimap_service: MinimapService) {}
    getRepoStars() { 

        this.minimap_service.getRepositoryStars().subscribe(
            {next: (response) => {this.repo_stars = response.stargazers_count}}
        )

        // fetch(this.repo_url)
        //     .then(response => response.json())
        //     .then(data => {this.repo_stars= data.stargazers_count})
        //     .catch(error => console.error("Error obtaining repository data:", error));
        // }
    }

    ngOnInit() {
        this.getRepoStars()
    }

}

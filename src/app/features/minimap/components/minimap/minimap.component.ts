import { Component } from '@angular/core';
import { DescriptionDirective } from 'src/app/shared/directives/description/description.directive';

@Component({
  selector: 'app-minimap',
  standalone: true,
  imports: [DescriptionDirective],
  templateUrl: './minimap.component.html',
  styleUrl: './minimap.component.css'
})
export class MinimapComponent {

    repo_url: string = `https://api.github.com/repos/arielalvaro57666/arielAlvaroPortfolio`
    repo_stars: number = 0

    getRepoStars() { 

        fetch(this.repo_url)
            .then(response => response.json())
            .then(data => {this.repo_stars= data.stargazers_count})
            .catch(error => console.error("Error obtaining repository data:", error));
        }


    ngOnInit() {
        this.getRepoStars()
    }

}

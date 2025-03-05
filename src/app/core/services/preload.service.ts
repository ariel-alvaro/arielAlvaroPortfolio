import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreloadService {
  loaded: boolean = false
  imageSources: string[] = [
    '/backpack/coffee.webp',
    '/backpack/pendrive.webp',
    '/backpack/coins.webp',
    '/backpack/laptop.webp',
    '/backpack/id.webp',
    '/backpack/notebook.webp',
    '/Sprites/3746.png',
    '/Sprites/book.png',
    '/Sprites/law.png',
    '/Sprites/spiral.png',
    '/Sprites/tick.png',
    '/Sprites/about.png',
    '/Sprites/coffee.png',
    '/Sprites/music.png',
    '/Sprites/summary.png',
    '/Sprites/title.png',
    '/Sprites/age.png',
    '/Sprites/corner.png',
    '/Sprites/pattern.png',
    '/Sprites/tabs.png',
    '/Sprites/wall.jpg',
    '/Sprites/arrow.png',
    '/Sprites/cross.png',
    '/Sprites/settings.png',
    '/Sprites/textureNew.png',
    '/Sprites/backpack.png',
    '/Sprites/framework.png',
    '/Sprites/sidebar-header.png',
    '/Sprites/textureOld.png',
    '/Sprites/banner.png',
    '/Sprites/known.png',
    '/Sprites/social.png',
    '/Sprites/texture.png',
    '/social/email.webp',
    '/social/in.webp',
    '/social/github.webp',
    '/minimap/169.png',
    '/minimap/email.png',
    '/minimap/flagAR.png',
    '/minimap/guide.png',
    '/minimap/mail.png',
    '/minimap/agility.png',
    '/minimap/farming.png',
    '/minimap/ge.png',
    '/minimap/house.png',
    '/minimap/map.png',
    '/minimap/Compass.png',
    '/minimap/fishing.png',
    '/minimap/github.png',
    '/minimap/in.png',
    '/minimap/star.png',
    '/minimap/dungeon.png',
    '/minimap/fishingshop.png',
    '/minimap/git.png',
    '/minimap/lodestone.png',
    '/projects/lawfirm.png'
  ];

  setTimeOutWaitScreen() {
    localStorage.setItem("visited", JSON.stringify(true))
    setTimeout(() => {
      this.loaded = true
    }, 1000);

  }



  loadImages(): Promise<void> | void {
    
    let visited = JSON.parse(localStorage.getItem("visited"))

    if (visited === true) {
      this.loaded = true
      return
    } 

    const imagePromises = this.imageSources.map(src => this.loadImage(src));
    
    return Promise.all(imagePromises).then(() => {
      this.setTimeOutWaitScreen()

    })
  }

  private loadImage(src: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
    });
  }

}


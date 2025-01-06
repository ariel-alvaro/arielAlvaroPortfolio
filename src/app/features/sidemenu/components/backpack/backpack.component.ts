import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackpackItem } from '@features/sidemenu/interfaces/sidemenu.interfaces';
import { DescriptionDirective } from 'src/app/shared/directives/description/description.directive';

@Component({
  selector: 'app-backpack',
  standalone: true,
  imports: [CommonModule, DescriptionDirective],
  templateUrl: './backpack.component.html',
  styleUrl: './backpack.component.css'
})
export class BackpackComponent {


    items: BackpackItem[] = [
        {name: "Coffee", count: 4, imageUrl:"/backpack/coffee.png"},
        {name: "Pendrive", count: 1, imageUrl:"/backpack/pendrive.png"},
        {name: "Laptop", count: 1,  imageUrl:"/backpack/laptop.png"},
        {name: "Gold", count: 25,  imageUrl:"/backpack/coins.png"},
        {name: "Id", count: 1,  imageUrl:"/backpack/id.png"},
        {name: "Book", count: 2,  imageUrl:"/backpack/notebook.png"},
        {name: "", count: 0, imageUrl:""},
        {name: "", count: 0, imageUrl:""},
        {name: "", count: 0, imageUrl:""},
        {name: "", count: 0, imageUrl:""},
        {name: "", count: 0, imageUrl:""},
        {name: "", count: 0, imageUrl:""},
        {name: "", count: 0, imageUrl:""},
        {name: "", count: 0, imageUrl:""},
        {name: "", count: 0, imageUrl:""},
        {name: "", count: 0, imageUrl:""},
        {name: "", count: 0, imageUrl:""},
        {name: "", count: 0, imageUrl:""},
        {name: "", count: 0, imageUrl:""},
        {name: "", count: 0, imageUrl:""},
        {name: "", count: 0, imageUrl:""},
        {name: "", count: 0, imageUrl:""},
        {name: "", count: 0, imageUrl:""},
        {name: "", count: 0, imageUrl:""},
    ]

}

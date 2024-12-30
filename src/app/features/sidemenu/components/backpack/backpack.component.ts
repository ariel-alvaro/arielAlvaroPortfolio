import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackpackItem } from '@features/sidemenu/interfaces/sidemenu.interfaces';

@Component({
  selector: 'app-backpack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backpack.component.html',
  styleUrl: './backpack.component.css'
})
export class BackpackComponent {

    n: number[] = [1,2,3,4,5,6,7,8,1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3]

    items: BackpackItem[] = [
        {name: "Coffee", count: 4, imageUrl:"/backpack/coffee.png"},
        {name: "Pendrive", count: 1, imageUrl:"/backpack/pendrive.png"},
        {name: "Laptop", count: 1,  imageUrl:"/backpack/laptop.png"},
        {name: "Gold", count: 25,  imageUrl:"/backpack/gold.png"},
        {name: "Id", count: 1,  imageUrl:"/backpack/id.png"},
        {name: "Notebook", count: 2,  imageUrl:"/backpack/notebook.png"},
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

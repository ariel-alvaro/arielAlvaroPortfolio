import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Skill } from '@features/sidemenu/interfaces/sidemenu.interfaces';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

    skills: Skill[] = [
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        {level:0, maxLevel:99, iconUrl:"/Skills/c.png"},
        
    ]
}

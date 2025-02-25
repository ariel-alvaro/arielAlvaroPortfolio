import { Injectable } from '@angular/core';
import { MenuOption } from '../enums/menu.enum';

@Injectable({
  providedIn: 'root'
})
export class PrincipalMenuService {
  selection: string = ""

  constructor() { }

  setSelection(option: MenuOption) {
    this.selection = option
  }
}

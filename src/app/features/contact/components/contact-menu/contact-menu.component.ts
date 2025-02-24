import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '@features/contact/services/email.service';

@Component({
  selector: 'app-contact-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-menu.component.html',
  styleUrl: './contact-menu.component.css'
})
export class ContactMenuComponent {
    area_focused: boolean = false
    message: string = ""

    constructor(public email_service: EmailService) {}

    test() {
      this.email_service.sendEmail(".")
    }

    setAreaFocus() {
        console.log(this.message)
    }
}

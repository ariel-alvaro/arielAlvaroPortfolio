import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Email } from '@features/contact/interfaces/contact.interfaces';
import { EmailService } from '@features/contact/services/email.service';
import { finalize, tap } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment.development';

@Component({
  selector: 'app-contact-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-menu.component.html',
  styleUrl: './contact-menu.component.css'
})
export class ContactMenuComponent {
    sending: boolean = false
    subject: string = ""
    message: string = ""
    success: boolean = false
    ack: boolean = false

    constructor(public email_service: EmailService) {}

    validateFields(subject: string, body: string) {
        return subject != "" && body != ""
    }

    restart() {
        this.subject = ""
        this.message = ""
        this.sending = false
    }

    restartACK() {
        this.ack = false
        this.success = false
    }

    showACK(ok: boolean) {
        
        if (ok) {
            this.success = true
        } 
        this.ack = true

        setTimeout(() => {
            this.ack = false
        },2*1000)
    }

    sendEmail() {

        let is_valid = this.validateFields(this.subject, this.message)
        if (!is_valid) {
            return
        }

        this.sending = true
        this.email_service.sendEmail(this.subject, this.message)
        .pipe( 
            tap(() => {this.sending = true}),  
            
        )
        .subscribe({
            next: (response) => {
                this.restart()
                this.showACK(true)
            },
            error: (err) => { 
                this.showACK(false)
                this.sending = false
            }
        })
    }

    ngOnInit() {
        console.log(enviroment.production)
    }
}

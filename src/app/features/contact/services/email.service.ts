import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
@Injectable({
  providedIn: 'root'
})
export class EmailService {




    constructor() { }


    sendEmail(message: string) {   
        emailjs.sendForm('service_wn30s6r', 'YOUR_TEMPLATE_ID', message, 'YOUR_USER_ID')
        .then((result) => {
            console.log("Email sent")
        }, (error) => {
            console.log(error.text);
        });
        
    }

}

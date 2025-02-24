import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
@Injectable({
  providedIn: 'root'
})
export class EmailService {




    constructor() { }


    sendEmail(message: string) {   

        
        let request = fetch("http://localhost:8080/send-email", {
            method: "POST",
            headers: {"Content-Type":"aplication/json"},
            body: JSON.stringify({
                subject: "Hola",
                body: "weaaa"
            })
        })
        .then(r => console.log(r.status))
        
    }

}

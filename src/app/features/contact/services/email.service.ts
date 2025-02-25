import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { Email } from '../interfaces/contact.interfaces';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { HTTPOptions } from 'src/app/core/interfaces/core.interfaces';
@Injectable({
  providedIn: 'root'
})
export class EmailService {




    constructor(private api_service: HttpService) { }


    sendEmail(subject: string, body: string): Observable<void>{   
        
        const email: Email = {
            subject: subject,
            body: body
        }

        let options: HTTPOptions = {
            endpoint: "send-email",
            params: email
        }

        return this.api_service.post(options)
    }

}

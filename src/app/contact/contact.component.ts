import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ReCaptchaV3Service} from "ng-recaptcha";

import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, ParamMap} from "@angular/router";

declare const Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isCheckboxChecked: boolean = false;

  title = 'Angular14App';
  FormData!: FormGroup;
  submitted = false;
  constructor(private builder: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private recaptchaV3Service: ReCaptchaV3Service) {}
  ngOnInit() {
    this.FormData = new FormGroup({
      Firstname: new FormControl('', [Validators.required]),
      Name: new FormControl('', [Validators.required]),
      Street: new FormControl('', [Validators.required]),
      City: new FormControl('', [Validators.required]),
      Company: new FormControl(),
      Email: new FormControl('', [Validators.required]),
      HallOfFame: new FormControl(),
      SweetTemptation: new FormControl(),
      SpiritInTheSky: new FormControl(),
      DefaultCheck: new FormControl(false, [Validators.required]),
    })
  }
  onSubmit(FormData) {
    this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
      Email.send({
        Host: 'smtp.elasticemail.com',
        Username: 'mfreidl54@gmail.com',
        Password: '50BB753AC2BA17951DBFB450003B2C5D4103',
        To: 'mfreidl54@gmail.com',
        From: 'mfreidl54@gmail.com',
        Subject: "Bestellung",
        Body: `<i>This is sent as order from the Genuss Allee website.</i> <br/> <br/> <b>Firma: </b>${FormData.Company}<br /> <b>Name: </b>${FormData.Firstname + ' ' + FormData.Name} <br /> <b>Straße: </b>${FormData.Street}<br /> <b>Ort:</b>${FormData.City}<br /> <b>Email: </b>${FormData.Email}<br /> <b>Menge Hall of fame: </b>${FormData.HallOfFame}<br /> <b>Menge Sweet temptation: </b>${FormData.SweetTemptation}<br /> <b>Menge Spirit in the Sky: </b>${FormData.SpiritInTheSky}<br /> <br><br> <b>~End of Message.~</b>`
      }).then(
        (message: any) => {
          alert("message");
          this.FormData.reset();
        }
      );
    });
  }
}

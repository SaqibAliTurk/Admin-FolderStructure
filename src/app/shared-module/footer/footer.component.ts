import { Component, OnInit } from '@angular/core';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faPhone = faPhone;
  faEmail = faEnvelope;
  faLocation = faLocationDot;

  faFacebook = faFacebookF;
  faTwitter = faTwitter;
  faLinkedin = faLinkedinIn;
  faInstagram = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}

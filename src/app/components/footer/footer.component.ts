import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {WindowService} from "../../services/window.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  // @ts-ignore
  @ViewChild('linkedIn') linkedInRef: ElementRef;
  // @ts-ignore
  @ViewChild('mail') mailRef: ElementRef;

  constructor(private renderer: Renderer2,
              private windowService: WindowService) { }

  linkedInClicked() {
    this.windowService.navigate('https://www.linkedin.com/in/pabsanji/');
  }

  mailClicked() {
    this.windowService.navigate('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=pabsanji@gmail.com');
  }
}

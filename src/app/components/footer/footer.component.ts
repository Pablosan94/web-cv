import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

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

  constructor(private renderer: Renderer2) { }
}

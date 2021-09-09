import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {NavbarLinkModel} from "../../models/navbar-link.model";

@Component({
  selector: 'app-navbar-link',
  templateUrl: './navbar-link.component.html',
  styleUrls: ['./navbar-link.component.scss']
})
export class NavbarLinkComponent implements AfterViewInit {
  // @ts-ignore
  @ViewChild('icon') icon: ElementRef;

  @Input()
  // @ts-ignore
  public link: NavbarLinkModel;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    if (this.link.iconClass) {
      this.renderer.addClass(this.icon.nativeElement, this.link.iconClass);
    }
  }
}

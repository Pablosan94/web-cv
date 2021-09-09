import {Component} from '@angular/core';
import {NavbarLinkModel} from "../../models/navbar-link.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public links: NavbarLinkModel[] = [
    {
      title: 'Personal information'
    },
    {
      title: 'Skills'
    },
    {
      title: 'Work experience'
    }
  ];
}

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {NavbarLinkModel} from "../../models/navbar-link.model";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {getIsMobile} from "../../state/selectors/app.selectors";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // @ts-ignore
  @ViewChild('menu') menu: ElementRef;
  // @ts-ignore
  @ViewChild('menuContent', { static: false }) menuContent: ElementRef;

  // @ts-ignore
  public isMobile$: Observable<boolean>;

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

  public isMenuToggled: boolean = false;

  constructor(private store: Store, private renderer: Renderer2) {}

  public ngOnInit(): void {
    this.isMobile$ = this.store.pipe(select(getIsMobile));
  }

  public menuToggled(): void {
    if (this.isMenuToggled) {
      this.renderer.removeClass(this.menu.nativeElement, 'active');
    } else {
      this.renderer.addClass(this.menu.nativeElement, 'active');
    }
    this.isMenuToggled = !this.isMenuToggled;
  }

  onLinkClicked() {
    this.menuToggled();
  }
}

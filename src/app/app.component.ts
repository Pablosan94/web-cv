import {Component, HostListener, OnInit} from '@angular/core';
import {WindowService} from "./services/window.service";
import {Store} from "@ngrx/store";
import {AppActions} from "./state/actions/app.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.store.dispatch(AppActions.setWindowSize({ size: event.target.innerWidth }));
  }

  constructor(private windowService: WindowService,
              private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(AppActions.setWindowSize({ size: this.windowService.window.innerWidth }));
  }
}

import {Component, HostListener, OnInit} from '@angular/core';
import {WindowService} from "./services/window.service";
import {select, Store} from "@ngrx/store";
import {AppActions} from "./state/actions/app.actions";
import {Observable} from "rxjs";
import {getCurrentRoute} from "./state/selectors/app.selectors";

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

  // @ts-ignore
  public currentRoute$: Observable<string>;

  constructor(private windowService: WindowService,
              private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(AppActions.setWindowSize({ size: this.windowService.window.innerWidth }));
    this.currentRoute$ = this.store.pipe(select(getCurrentRoute));
  }
}

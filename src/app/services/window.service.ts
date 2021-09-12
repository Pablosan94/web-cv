import { Injectable } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";

function _window(): any {
  return window;
}

export interface RedirectionExtras extends NavigationExtras {
  target?: string;
}

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  constructor(private router: Router) {}

  get window(): any {
    return _window();
  }

  public external(url: string): boolean {
    return /^http(?:s)?:\/{2}\S+$/.test(url);
  }

  public redirect(url: string, target = '_blank'): Promise<boolean> {
    return new Promise<boolean>((res, err) => {
      try {
        res(!!this.window.open(url, target));
      } catch(e) {
        err(e);
      }
    });
  }

  public navigate(url: string, extras?: RedirectionExtras): Promise<boolean> {
    return this.external(url)
      ? this.redirect(url, extras && extras.target)
      : this.router.navigateByUrl(url, extras);
  }
}

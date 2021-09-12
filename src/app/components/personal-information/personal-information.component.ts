import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Subscription} from "rxjs";
import {getIsMobile} from "../../state/selectors/app.selectors";
import {Router} from "@angular/router";

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit, OnDestroy {
  // @ts-ignore
  @ViewChild('skipIntro') skipIntroRef: ElementRef;

  // @ts-ignore
  public isMobile: boolean;
  public subscriptions: Subscription = new Subscription();

  public age: number = 0;
  public catAge: number = 0;
  public birthDate: Date = new Date(1994, 2, 15);
  public catBirthDate: Date = new Date(2020, 7, 12);

  constructor(private store: Store,
              private renderer: Renderer2,
              private router: Router) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.store.pipe(select(getIsMobile)).subscribe(isMobile => {
        this.isMobile = isMobile;
      })
    );

    this.age = PersonalInformationComponent.calculateAge(this.birthDate);
    this.catAge = PersonalInformationComponent.calculateAge(this.catBirthDate);

    setTimeout(() => {
      this.renderer.setStyle(this.skipIntroRef.nativeElement, 'opacity', 1);
      this.renderer.setStyle(this.skipIntroRef.nativeElement, 'visibility', 'visible');
    }, 5000);
  }

  onSkipIntro() {
    this.router.navigate(['skills'], { skipLocationChange: true });
  }

  private static calculateAge(birthDate: Date): number {
    // @ts-ignore
    let ageDiffMs = Date.now() - birthDate.getTime();
    let ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

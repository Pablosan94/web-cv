import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLinkComponent } from './components/navbar-link/navbar-link.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import {WindowService} from "./services/window.service";
import {StoreModule} from "@ngrx/store";
import {appReducer} from "./state/reducers/app.reducer";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLinkComponent,
    PersonalInformationComponent,
    SkillsComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    StoreModule.forRoot({ app: appReducer })
  ],
  providers: [WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }

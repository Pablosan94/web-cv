import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorkExperienceComponent} from "./components/work-experience/work-experience.component";
import {PersonalInformationComponent} from "./components/personal-information/personal-information.component";
import {SkillsComponent} from "./components/skills/skills.component";

const routes: Routes = [
  {
    path: 'personal-information', component: PersonalInformationComponent
  },
  {
    path: 'skills', component: SkillsComponent
  },
  {
    path: 'work-experience', component: WorkExperienceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

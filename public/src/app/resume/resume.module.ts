import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import {ResumeRoutingModule} from './resume-routing.module';
import {SkillsComponent} from './skills/skills.component';
import {ExperienceComponent} from './experience/experience.component';
import {SharedModule} from '../shared/shared.module';
import {ResumeService} from './resume.service';

@NgModule({
  declarations: [
    ResumeComponent,
    SkillsComponent,
    ExperienceComponent,
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    SharedModule,
  ],
  providers: [
    ResumeService,
  ]
})
export class ResumeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import {ResumeRoutingModule} from './resume-routing.module';
import {SkillsComponent} from './skills/skills.component';
import {ExperienceComponent} from './experience/experience.component';
import {SharedModule} from '../shared/shared.module';
import {ResumeService} from './resume.service';
import { SkillGroupComponent } from './skills/skill-group/skill-group.component';
import { JobComponent } from './experience/job/job.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    ResumeComponent,
    SkillsComponent,
    ExperienceComponent,
    SkillGroupComponent,
    JobComponent,
    SectionComponent,
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

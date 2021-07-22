import {Component, HostBinding, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ResumeService} from './resume.service';
import {MatChipSelectionChange} from '@angular/material/chips';
import {SkillChip} from './skills/skills.component';
import {Skill} from '../core/interfaces/skill';
import {Job} from '../core/interfaces/job';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {

  bufferLG = 20;
  bufferMD = 10;
  bufferSM = 5;

  skills: Skill[];
  jobs: Job[];

  skillsLoading = false;
  jobsLoading = false;

  @HostBinding('attr.class') role = 'router-flex';

  constructor(
    private resumeService: ResumeService,
  ) {}

  ngOnInit(): void {
    this.getSkills();
    this.getJobs();
  }

  getSkills() {
    this.skillsLoading = true;
    this.resumeService.getSkills().subscribe(skills => {
      this.skillsLoading = false;
      this.skills = skills;
    });
  }

  getJobs() {
    this.jobsLoading = true;
    this.resumeService.getJobs().subscribe(jobs => {
      this.jobsLoading = false;
      this.jobs = jobs;
    });
  }

  alertSkillSelectionChange($event: SkillChip) {
    console.log($event);
  }
}

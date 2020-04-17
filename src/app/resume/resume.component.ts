import {Component, HostBinding, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ResumeService} from './resume.service';

export interface Skill {
  name: string;
  primary: boolean;
}

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
  jobs: any[];

  @HostBinding('attr.class') role = 'router-flex';

  constructor(
    private resumeService: ResumeService,
  ) {}

  ngOnInit(): void {
    this.getSkills();
    this.getJobs();
  }

  getSkills() {
    this.resumeService.getSkills().subscribe(skills => {
      this.skills = skills;
    });
  }

  getJobs() {
    this.resumeService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    });
  }

}

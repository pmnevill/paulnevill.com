import {Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  private _jobs: any[];

  @Input()
  get jobs() {
    return this._jobs;
  }
  set jobs(jobs: any[]) {
    this._jobs = _.orderBy(jobs, job => moment(job.endDate ? job.endDate : new Date()), ['desc']);
  }

  constructor() { }

  ngOnInit() {
  }

}

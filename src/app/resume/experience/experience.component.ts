import {Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';
import {Job} from '../../core/interfaces/job';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  private _jobs: Job[];

  @Input() loading: boolean;

  @Input()
  get jobs() {
    return this._jobs;
  }
  set jobs(jobs: Job[]) {
    this._jobs = _.orderBy(jobs, job => moment(job.endDate ? job.endDate : new Date()), ['desc']);
  }

  constructor() { }

  ngOnInit() {
  }

}

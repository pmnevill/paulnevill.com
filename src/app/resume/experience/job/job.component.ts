import {Component, Input, OnInit} from '@angular/core';
import {Job} from '../../../core/interfaces/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  @Input() job: Job;

  @Input() loading: boolean;

  @Input() last: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

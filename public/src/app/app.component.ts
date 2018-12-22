import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {BehaviorSubject, Observable} from 'rxjs';

export interface Skill {
  name: string;
  primary: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  bufferLG = 20;
  bufferMD = 10;
  bufferSM = 5;

  skills$: BehaviorSubject<Skill[]> = new BehaviorSubject([]);
  skills: Skill[];

  constructor() {}

  ngOnInit(): void {
    this.skills$.next([
      {
        name: 'Agile Methodology',
        primary: true,
      },
      {
        name: 'GIT',
        primary: true,
      },
      {
        name: 'Angular / Material',
        primary: true,
      },
      {
        name: 'JavaScript / ES6',
        primary: true,
      },
      {
        name: 'TypeScript',
        primary: true,
      },
      {
        name: 'Node.js / Express.js',
        primary: true,
      },
      {
        name: 'HTML 5',
        primary: true,
      },
      {
        name: 'CSS / LESS / SASS',
        primary: true,
      },
      {
        name: 'MongoDB',
        primary: true,
      },
      {
        name: 'NPM',
        primary: true,
      },
      {
        name: 'Redux',
        primary: true,
      },
      {
        name: 'Lodash',
        primary: true,
      },
      {
        name: 'AWS',
        primary: false,
      },
      {
        name: 'OAuth',
        primary: false,
      },
      {
        name: 'Bootstrap',
        primary: false,
      },
      {
        name: 'SQL',
        primary: false,
      },
    ]);

    this.skills$.subscribe((skills) => {
      this.skills = skills;
    });
  }

  addSkill(newSkill: Skill) {
    this.skills$.next([
      ...this.skills,
      newSkill,
    ]);
  }
}

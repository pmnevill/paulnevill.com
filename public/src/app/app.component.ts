import { Component } from '@angular/core';
import * as _ from 'lodash';
import {MatSelectionListChange} from '@angular/material';

export interface Skill {
  name: string;
  primary: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  bufferLG = 20;
  bufferMD = 10;
  bufferSM = 5;

  skills: Skill[] = [
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
  ];

  primarySkills: Skill[];
  secondarySkills: Skill[];

  constructor() {
    this.skills = _.sortBy(this.skills, (skill) => skill.name.toLowerCase());

    this.primarySkills = _.filter(this.skills, 'primary');
    this.secondarySkills = _.reject(this.skills, 'primary');
  }
}

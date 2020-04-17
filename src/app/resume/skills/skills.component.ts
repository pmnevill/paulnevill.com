import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Skill} from '../resume.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements OnInit {

  primarySkills: Skill[];
  secondarySkills: Skill[];
  _skills: Skill[];

  @Input()
  set skills(skills: Skill[]) {
    this._skills = skills;
    this.primarySkills = _.filter(skills, 'primary');
    this.secondarySkills = _.reject(skills, 'primary');
  }

  constructor() { }

  ngOnInit() {
  }

}

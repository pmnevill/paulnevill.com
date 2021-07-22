import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SkillChip} from '../skills.component';
import {ThemePalette} from '@angular/material/core';
import * as _ from 'lodash';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

@Component({
  selector: 'app-skill-group',
  templateUrl: './skill-group.component.html',
  styleUrls: ['./skill-group.component.scss']
})
export class SkillGroupComponent implements OnInit {

  private _selectable = false;

  @Input() skills: SkillChip[];

  @Input() label: string;

  @Input() color: ThemePalette;

  @Input() loading: boolean;

  @Input()
  get selectable() {
    return this._selectable;
  }
  set selectable(selectable: boolean) {
    this._selectable = coerceBooleanProperty(selectable);
  }

  @Output() skillSelectionChange = new EventEmitter<SkillChip>();

  dummies: string[];

  private _numberDummies = _.random(2, 10);

  constructor() { }

  ngOnInit(): void {
    this.dummies = _.times(this._numberDummies, _.constant('. . .'));
  }

  toggleSkill(skill: SkillChip) {
    skill.active = !skill.active;
    this.skillSelectionChange.emit(skill);
  }

}

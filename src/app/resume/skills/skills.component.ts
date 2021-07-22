import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import * as _ from 'lodash';
import {BehaviorSubject, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Skill} from '../../core/interfaces/skill';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

export interface SkillChip {
  skill: Skill;
  active: boolean;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements OnInit, OnDestroy {

  private _skills$ = new BehaviorSubject<Skill[]>([]);
  public skills$ = this._skills$.asObservable();

  private _primarySkills$ = new BehaviorSubject<SkillChip[]>([]);
  public primarySkills$ = this._primarySkills$.asObservable();

  private _secondarySkills$ = new BehaviorSubject<SkillChip[]>([]);
  public secondarySkills$ = this._secondarySkills$.asObservable();

  private _selectable = false;

  private _destroy$ = new Subject();

  @Input()
  set skills(skills: Skill[]) {
    this._skills$.next(skills);
  }

  @Input() loading: boolean;

  @Input()
  get selectable() {
    return this._selectable;
  }
  set selectable(selectable: boolean) {
    this._selectable = coerceBooleanProperty(selectable);
  }

  @Output() skillSelectionChange = new EventEmitter<SkillChip>();

  constructor() {}

  ngOnInit() {
    this.skills$
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(skills => {
        this._primarySkills$.next(_.chain(skills)
          .filter('primary')
          .map(this._mapSkills)
          .value()
        );
        this._secondarySkills$.next(_.chain(skills)
          .reject('primary')
          .map(this._mapSkills)
          .value()
        );
      });
  }

  private _mapSkills(skill: Skill): SkillChip {
    return {
      skill,
      active: true,
    };
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

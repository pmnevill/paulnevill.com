import {Skill} from './skill';

export interface Job {
  description: string;
  responsibilities: string[];
  employer: string;
  endDate: string;
  id: string;
  skills: Skill[];
  startDate: string;
  title: string;
}

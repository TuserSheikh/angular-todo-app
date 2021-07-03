import { TaskModel } from './task/task.model';

export type LogType = {
  time: string;
  log: string;
};

export class ListModel {
  name!: string;
  isFavorite!: boolean;
  tasks: TaskModel[] = [];
  logs: LogType[] = [];

  constructor(name: string, isFavorite = false) {
    this.name = name;
    this.isFavorite = isFavorite;
  }
}

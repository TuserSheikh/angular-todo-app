export enum TaskStatus {
  todo,
  doing,
  done,
}

export class TaskModel {
  name!: string;
  details!: string;
  status!: TaskStatus;
  bgColor!: string;

  constructor(
    name: string,
    details = '',
    bgColor = 'white',
    status = TaskStatus.todo
  ) {
    this.name = name;
    this.details = details;
    this.bgColor = bgColor;
    this.status = status;
  }
}

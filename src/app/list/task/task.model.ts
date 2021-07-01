export enum ListStatus {
  todo,
  doing,
  done,
}

export class ListModel {
  name!: string;
  details!: string;
  status!: ListStatus;

  constructor(name: string, details: string, status = ListStatus.doing) {
    this.name = name;
    this.details = details;
    this.status = status;
  }
}

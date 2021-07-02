export type LogType = {
  time: string;
  log: string;
};

export class ListModel {
  name!: string;
  isFavorite!: boolean;
  logs: LogType[] = [];

  constructor(name: string, isFavorite = false) {
    this.name = name;
    this.isFavorite = isFavorite;
  }
}

import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ListModel } from './list.model';
import { TaskModel } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  lists: ListModel[] = [
    new ListModel('One', false),
    new ListModel('Two', true),
    new ListModel('Three', true),
    new ListModel('Four', false),
  ];

  constructor(private _snackBar: MatSnackBar) {}

  addList(list: ListModel) {
    let find = this.lists.find(
      (l) => l.name.toLowerCase() === list.name.toLowerCase()
    );

    if (!find) {
      const len = this.lists.push(list);
      this.addLog(len - 1, `List '${list.name}' has been created`);
    } else {
      this._snackBar.open(`list name '${find.name}' already exist`, 'close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000,
      });
    }
  }

  addTask(index: number, task: TaskModel) {
    this.lists[index].tasks.push(task);
    this.addLog(index, `task '${task.name}' has been added`);
  }

  changeFavorite(index: number) {
    this.lists[index].isFavorite = !this.lists[index].isFavorite;

    const logText = this.lists[index].isFavorite
      ? `List '${this.lists[index].name}' is add to favorite`
      : `List '${this.lists[index].name}' is remove from favorite`;

    this.addLog(index, logText);
  }

  getLists() {
    return this.lists;
  }

  getTasksByListId(index: number) {
    return this.lists[index].tasks;
  }

  removeList(index: number) {
    this.lists.splice(index, 1);
  }

  getLogs(index: number) {
    return this.lists[index].logs;
  }

  addLog(index: number, log: string) {
    let time = formatDate(Date.now(), 'medium', 'en-US');
    this.lists[index].logs.push({ time, log });
  }
}

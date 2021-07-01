import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ListModel } from './list.model';

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
      this.lists.push(list);
    } else {
      this._snackBar.open(`list name '${find.name}' already exist`, 'close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000,
      });
    }
  }

  changeFavorite(index: number) {
    this.lists[index].changeFavorite();
  }

  getLists() {
    return this.lists;
  }
}

import { Injectable } from '@angular/core';
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

  constructor() {}

  addList(list: ListModel) {
    this.lists.push(list);
  }

  changeFavorite(index: number) {
    this.lists[index].changeFavorite();
  }

  getLists() {
    return this.lists;
  }
}

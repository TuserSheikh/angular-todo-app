import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../list.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  listId!: number;
  constructor(
    private _route: ActivatedRoute,
    private _listService: ListService
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      if (id) {
        this.listId = +id;
      }
    });
  }

  deleteList() {
    this._listService.removeList(this.listId);
  }
}

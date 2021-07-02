import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LogType } from '../list.model';
import { ListService } from '../list.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  listId!: number;
  logs!: LogType[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _listService: ListService
  ) {
    console.log('task component');
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      if (id) {
        this.listId = +id;
        this.logs = this._listService.getLogs(this.listId);
      }
    });
  }

  deleteList() {
    this._listService.removeList(this.listId);
    this._router.navigateByUrl('/list');
  }
}

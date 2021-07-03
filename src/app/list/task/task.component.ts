import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LogType } from '../list.model';
import { ListService } from '../list.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogTaskComponent } from '../dialog-task/dialog-task.component';
import { TaskModel, TaskStatus } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  listId!: number;
  logs!: LogType[];
  tasks!: TaskModel[];
  taskData: TaskModel = {
    name: '',
    details: '',
    status: TaskStatus.todo,
    bgColor: 'lightGray',
  };

  constructor(
    public dialog: MatDialog,
    private _route: ActivatedRoute,
    private _router: Router,
    private _listService: ListService
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      if (id) {
        this.listId = +id;
        let listLength = this._listService.lists.length;

        if (
          !isNaN(this.listId) &&
          this.listId < listLength &&
          this.listId >= 0
        ) {
          this.logs = this._listService.getLogs(this.listId);
          this.tasks = this._listService.getTasksByListId(this.listId);
        } else {
          this._router.navigateByUrl('/list');
        }
      }
    });
  }

  deleteList() {
    this._listService.removeList(this.listId);
    this._router.navigateByUrl('/list');
  }

  dialogTask() {
    const dialogRef = this.dialog.open(DialogTaskComponent, {
      data: this.taskData,
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        const task = new TaskModel(
          result.name,
          result.details,
          result.bgColor,
          result.status
        );
        this._listService.addTask(this.listId, task);
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddTaskComponent } from './dialog-add-task/dialog-add-task.component';
import { ListModel } from './list.model';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  lists!: ListModel[];
  listName = '';

  constructor(public dialog: MatDialog, private _listService: ListService) {}

  ngOnInit(): void {
    this.lists = this._listService.getLists();
  }

  dialogAddTask() {
    const dialogRef = this.dialog.open(DialogAddTaskComponent, {
      data: {
        listName: this.listName,
      },
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (!!result) {
        this.listName = result;
        this.addList();
      }
    });
  }

  addList() {
    this._listService.addList(new ListModel(this.listName));
    this._listService.addLog(
      this.lists.length - 1,
      `List '${this.listName}' has been created`
    );
    this.listName = '';
  }

  changeFavorite(index: number) {
    this._listService.changeFavorite(index);
    const logText = this._listService.lists[index].isFavorite
      ? `List '${this.listName}' is add to favorite`
      : `List '${this.listName}' is remove from favorite`;
    this._listService.addLog(index, logText);
  }
}

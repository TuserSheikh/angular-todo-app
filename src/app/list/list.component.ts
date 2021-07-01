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

  constructor(public dialog: MatDialog, public listService: ListService) {}

  ngOnInit(): void {
    this.lists = this.listService.getLists();
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
    this.listService.addList(new ListModel(this.listName));
    this.listName = '';
  }

  changeFavorite(index: number) {
    this.listService.changeFavorite(index);
  }
}

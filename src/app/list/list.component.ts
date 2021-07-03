import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogAddListComponent } from './dialog-add-list/dialog-add-list.component';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
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

  constructor(
    public dialog: MatDialog,
    private _listService: ListService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.lists = this._listService.getLists();
  }

  dialogAddList() {
    const dialogRef = this.dialog.open(DialogAddListComponent, {
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

  dialogRemoveList(index: number) {
    const dialogRef = this.dialog.open(DialogConfirmComponent);

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this._listService.removeList(index);
        const taskId = +this._route.snapshot.firstChild?.params.id;

        if (taskId === index) {
          this._router.navigateByUrl('/list');
        }
      }
    });
  }

  addList() {
    this._listService.addList(new ListModel(this.listName));
    this.listName = '';
  }

  changeFavorite(index: number) {
    this._listService.changeFavorite(index);
  }
}

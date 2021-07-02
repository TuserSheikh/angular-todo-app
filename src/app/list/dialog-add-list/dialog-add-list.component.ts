import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-list',
  templateUrl: './dialog-add-list.component.html',
  styleUrls: ['./dialog-add-list.component.scss'],
})
export class DialogAddListComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<{ listName: string }>,
    @Inject(MAT_DIALOG_DATA) public data: { listName: string }
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

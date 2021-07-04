import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TaskModel } from '../task/task.model';

@Component({
  selector: 'app-dialog-task',
  templateUrl: './dialog-task.component.html',
  styleUrls: ['./dialog-task.component.scss'],
})
export class DialogTaskComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<{
      task: TaskModel;
      isEditMode: boolean;
    }>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      task: TaskModel;
      isEditMode: boolean;
    }
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

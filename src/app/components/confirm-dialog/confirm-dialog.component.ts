import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  constructor(public ref: NbDialogRef<ConfirmDialogComponent>) {
  }

  cancel(): void {
    this.ref.close(false);
  }

  submit(): void {
    this.ref.close(true);
  }
}

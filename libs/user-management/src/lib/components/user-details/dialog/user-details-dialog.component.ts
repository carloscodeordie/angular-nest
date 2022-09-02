import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '@code-or-die/shared';

@Component({
  selector: 'code-or-die-user-details-dialog',
  templateUrl: './user-details-dialog.component.html',
})
export class UserDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

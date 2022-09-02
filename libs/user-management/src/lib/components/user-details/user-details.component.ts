import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '@code-or-die/shared';
import { ClearSelectUserAction } from '@code-or-die/store';
import { Store } from '@ngxs/store';

export interface DialogData {
  user: User;
}

@Component({
  selector: 'code-or-die-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  constructor(private store: Store, public dialog: MatDialog) {
    this.store
      .select((state) => state.users_store.selectedUser)
      .subscribe((user) => {
        if (user) {
          const dialogRef = this.dialog.open(UserDetailsDialogComponent, {
            data: { user },
          });
          dialogRef.afterClosed().subscribe((result) => {
            this.store.dispatch(new ClearSelectUserAction());
          });
        }
      });
  }
}

@Component({
  selector: 'code-or-die-user-details-dialog',
  templateUrl: './code-or-die-user-details-dialog.html',
})
export class UserDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

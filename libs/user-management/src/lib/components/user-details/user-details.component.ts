import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, User } from '@code-or-die/shared';
import { ClearSelectUserAction } from '@code-or-die/store';
import { Store } from '@ngxs/store';
import { UserDetailsDialogComponent } from './dialog/user-details-dialog.component';

@Component({
  selector: 'code-or-die-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  constructor(private store: Store, public dialog: MatDialog) {
    this.store
      .select((state) => state.users_store.selectedUser)
      .subscribe((user: User) => {
        if (user) {
          const dialogRef = this.dialog.open(UserDetailsDialogComponent, {
            data: { user },
          });
          dialogRef.afterClosed().subscribe(() => {
            this.store.dispatch(new ClearSelectUserAction());
          });
        }
      });
  }
}

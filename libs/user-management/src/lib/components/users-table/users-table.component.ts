import { Component, Input } from '@angular/core';
import { User, USER_TABLE_HEADERS } from '@code-or-die/shared';
import { SelectUserAction } from '@code-or-die/store';
import { Store } from '@ngxs/store';

@Component({
  selector: 'code-or-die-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  displayedColumns: string[] = USER_TABLE_HEADERS;
  @Input() users: User[];

  constructor(private store: Store) {
    this.users = [];
  }

  selectUser(user: User): void {
    this.store.dispatch(new SelectUserAction(user));
  }
}

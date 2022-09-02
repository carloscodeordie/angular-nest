import { Component, Input } from '@angular/core';
import { User, USER_TABLE_HEADERS } from '@code-or-die/shared';

@Component({
  selector: 'code-or-die-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  displayedColumns: string[] = USER_TABLE_HEADERS;
  @Input() users: User[];

  constructor() {
    this.users = [];
  }

  selectUser(user: User): void {
    // TODO: Create Action
    console.log(user);
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { User } from '@code-or-die/shared';
import { GetUsersAction } from '@code-or-die/store';

@Component({
  selector: 'code-or-die-users-management-page',
  templateUrl: './users-management-page.component.html',
  styleUrls: ['./users-management-page.component.scss'],
})
export class UsersManagementPageComponent implements OnInit {
  users: User[];

  constructor(private store: Store) {
    this.users = [];
  }

  ngOnInit(): void {
    this.store.dispatch(new GetUsersAction()).subscribe((result) => {
      this.users = result.users_store.users;
    });
  }
}

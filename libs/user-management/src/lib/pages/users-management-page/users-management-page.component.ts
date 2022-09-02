import { Component, OnInit } from '@angular/core';

import { User } from '@code-or-die/shared';

@Component({
  selector: 'code-or-die-users-management-page',
  templateUrl: './users-management-page.component.html',
  styleUrls: ['./users-management-page.component.scss'],
})
export class UsersManagementPageComponent implements OnInit {
  users: User[];

  constructor() {
    this.users = [
      {
        id: 1,
        name: 'Carlos Macias',
        age: 37,
        role: 'admin',
      },
    ];
  }

  ngOnInit(): void {
    console.log('Page');
  }
}

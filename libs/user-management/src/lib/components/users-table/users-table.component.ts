import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'code-or-die-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  ngOnInit(): void {
    console.log('UsersTable');
  }
}

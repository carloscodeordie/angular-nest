import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'code-or-die-users-management-page',
  templateUrl: './users-management-page.component.html',
  styleUrls: ['./users-management-page.component.scss'],
})
export class UsersManagementPageComponent implements OnInit {
  ngOnInit(): void {
    console.log('UsersManagementPage');
  }
}

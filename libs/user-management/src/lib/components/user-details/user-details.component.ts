import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'code-or-die-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  ngOnInit(): void {
    console.log('UserDetails');
  }
}
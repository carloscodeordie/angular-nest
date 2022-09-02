import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

import { MenuComponent } from './components/menu/menu.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersManagementPageComponent } from './pages/users-management-page/users-management-page.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatGridListModule],
  declarations: [
    MenuComponent,
    UsersTableComponent,
    UserDetailsComponent,
    UsersManagementPageComponent,
  ],
  exports: [UsersManagementPageComponent],
})
export class UserManagementModule {}

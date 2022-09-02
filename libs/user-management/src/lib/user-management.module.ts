import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MenuComponent } from './components/menu/menu.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersManagementPageComponent } from './pages/users-management-page/users-management-page.component';
import { UserDetailsDialogComponent } from './components/user-details/dialog/user-details-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
  ],
  declarations: [
    MenuComponent,
    UsersTableComponent,
    UserDetailsComponent,
    UsersManagementPageComponent,
    UserDetailsDialogComponent,
  ],
  exports: [UsersManagementPageComponent],
})
export class UserManagementModule {}

import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersComponent } from './users.component';
import { UserItemComponent } from './user-list/user-item/user-item.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserStartComponent } from './user-start/user-start.component';
import { UsersRoutingModule } from './users-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations:[
    UserListComponent,
    UserEditComponent,
    UsersComponent,
    UserItemComponent,
    UserDetailComponent,
    UserStartComponent,
  ],
  imports: [
    RouterModule,
    FormsModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule{}

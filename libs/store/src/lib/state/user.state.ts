import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { User } from '@code-or-die/shared';
import { GetUsersAction } from '../actions/user.action';
import { UsersService } from '../services/users.service';

export interface UserStateModel {
  users: User[];
}

@State<UserStateModel>({
  name: 'users_store',
  defaults: {
    users: [],
  },
})
@Injectable()
export class UserState {
  constructor(private userService: UsersService) {}

  @Action(GetUsersAction)
  getUsers(ctx: StateContext<UserStateModel>): void {
    const state = ctx.getState();
    const users: User[] = this.userService.getUsers();
    ctx.setState({
      ...state,
      users,
    });
  }
}

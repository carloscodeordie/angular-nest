import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { User } from '@code-or-die/shared';
import {
  ClearSelectUserAction,
  GetUsersAction,
  SelectUserAction,
} from '../actions/user.action';
import { UsersService } from '../services/users.service';

export interface UserStateModel {
  users: User[];
  selectedUser?: User;
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
  async getUsers(ctx: StateContext<UserStateModel>): Promise<void> {
    const state = ctx.getState();
    const users: User[] = await this.userService.getUsers();
    ctx.setState({
      ...state,
      users,
    });
  }

  @Action(SelectUserAction)
  selectUser(
    ctx: StateContext<UserStateModel>,
    action: SelectUserAction
  ): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selectedUser: action.user,
    });
  }

  @Action(ClearSelectUserAction)
  clearSelectedUser(ctx: StateContext<UserStateModel>): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selectedUser: undefined,
    });
  }
}

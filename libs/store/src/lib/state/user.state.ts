import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { User } from '@code-or-die/shared';
import { GetUsersAction } from '../actions/user.action';

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
  @Action(GetUsersAction)
  getUsers(ctx: StateContext<UserStateModel>): void {
    const state = ctx.getState();
    const users: User[] = [
      {
        id: 1,
        name: 'Jose Perez',
        age: 30,
        role: 'user',
      },
      {
        id: 2,
        name: 'Carlos Macias',
        age: 37,
        role: 'admin',
      },
    ];
    ctx.setState({
      ...state,
      users,
    });
  }
}

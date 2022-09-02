import { User } from '@code-or-die/shared';

export class GetUsersAction {
  static readonly type = '[User Management Page] Get Users';
}

export class SelectUserAction {
  static readonly type = '[User Management Page] Select User';
  constructor(public user: User) {}
}

export class ClearSelectUserAction {
  static readonly type = '[User Management Page] Clear Selected User';
}

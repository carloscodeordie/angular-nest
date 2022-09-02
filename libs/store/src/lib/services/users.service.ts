import { Injectable } from '@angular/core';
import { User } from '@code-or-die/shared';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  getUsers(): User[] {
    // TODO: Make an ajax call using axios
    return [
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
  }
}

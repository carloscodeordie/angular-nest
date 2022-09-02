import { Injectable } from '@nestjs/common';
import { User } from '@code-or-die/api-interfaces';

@Injectable()
export class AppService {
  getUsers(): User[] {
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
      {
        id: 3,
        name: 'John Smith',
        age: 20,
        role: 'admin',
      },
      {
        id: 4,
        name: 'Cristiano Ronaldo',
        age: 35,
        role: 'user',
      },
      {
        id: 5,
        name: 'Leonel Messi',
        age: 36,
        role: 'admin',
      },
    ];
  }
}

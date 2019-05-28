import { Injectable } from '@angular/core';
import { User } from './models/user';
import { users } from './models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  createUser(user: User): boolean {
    const size = users.length;
    for (let i = 0; i < size ; i++) {
      const u = users[i];

      if (u.name === user.name) {
        return false;
      }
    }

    user.id = size;
    users.push(user);
  }

  readUser(id: number): User {
    for (const user of users) {
      if (user.id == id) {
        return user;
      }
    }
  }

  updateUser(id: number, user: User): void {
    const size = users.length;
    for (let i = 0; i < size; i++) {
      const u = users[i];
      if (u.id == id) {
        users[i] === user;
        break;
      }
    }
  }

  deleteUser(id: number): boolean {
    let pos = 0;
    for (const user of users) {
      if (user.id == id) {
        users.splice(pos, 1);
        return true;
      }
      pos++;
    }
    return false;
  }

  listUsers(): User[] {
    return users;
  }
}

import { Subject } from 'rxjs';
import { User } from './model/users.model';
import { Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';


@Injectable()
export class UsersService {
  usersChanged = new Subject<User[]>();

  private users: User[] = [];

  constructor() {}

  setUsers(users: User[]){
    this.users = users;
    this.usersChanged.next(this.users.slice())
  }

  getUsers() {
    return this.users.slice(); //o slice serve para retornar uma cópia do Array
  }

  getUser(index: number){
    return this.users[index];
  }

  addUser(user: User){
    this.users.push(user);
    this.usersChanged.next(this.users.slice());
  }

  updateUser(index: number, newUser: User){
    this.users[index] = newUser;
    this.usersChanged.next(this.users.slice())
  }

  deleteUser(index: number){
    this.users.splice(index, 1)
    this.usersChanged.next(this.users.slice())
  }

}

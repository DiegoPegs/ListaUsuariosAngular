import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { DataStorageService } from "../shared/data-storage.service";

import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { User } from './model/users.model';

@Injectable({
  providedIn: "root"
})
export class UsersResolverService implements Resolve<User[]> {
  constructor(
    private dataStorageservice: DataStorageService,
    private userService: UsersService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): User[] | Observable<User[]> | Promise<User[]> {
    const usuarios = this.userService.getUsers();
    if (usuarios.length === 0) {
      return this.dataStorageservice.fetchUsers();
    } else {
      return usuarios;
    }
  }
}

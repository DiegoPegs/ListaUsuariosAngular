import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";

import { AuthService } from "../auth/auth.service";
import { UsersService } from '../users/users.service';
import { User } from '../users/model/users.model';

@Injectable({
  providedIn: "root"
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private userService: UsersService
  ) {}

  storeUsers() {
    const usuarios = this.userService.getUsers();
    this.http
      .put("https://angularlistausuarios.firebaseio.com/usuarios.json", usuarios)
      .subscribe();
  }

  fetchUsers() {
    return this.http
      .get<User[]>(
        "https://angularlistausuarios.firebaseio.com/usuarios.json"
      )
      .pipe(
        map(usuarios => {
          return usuarios.map(usuario => {
            return {
              ...usuario
            };
          });
        }),
        tap(usuarios => {
          this.userService.setUsers(usuarios);
        })
      );
  }
}

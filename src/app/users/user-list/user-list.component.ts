import { Component, OnInit } from "@angular/core";
import { User } from "../model/users.model";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { UsersService } from "../users.service";
import { DataStorageService } from "src/app/shared/data-storage.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  usuarios: User[];
  subscription: Subscription;
  filterName = '';
  direction: number = 0;

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {
    this.subscription = this.userService.usersChanged.subscribe(
      (user: User[]) => {
        this.dataStorageService.storeUsers();
        this.usuarios = user;
      }
    );
    this.dataStorageService.fetchUsers().subscribe()
    // this.usuarios = this.userService.getUsers();
  }

  onNewUser() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDirection(d: number){
    this.direction = d;
  }
}

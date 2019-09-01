import { Component, OnInit } from "@angular/core";
import { User } from "../model/users.model";
import { UsersService } from "../users.service";
import { ActivatedRoute, Router, Params } from "@angular/router";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  usuario: User;
  id: number;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.usuario = this.userService.getUser(this.id);
    });
  }

  onEditUser() {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }

  onDeleteUser() {
    this.userService.deleteUser(this.id);
    this.router.navigate(["/users"]);
  }
}

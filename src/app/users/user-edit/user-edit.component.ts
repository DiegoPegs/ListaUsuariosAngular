import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { UsersService } from "../users.service";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { NgForm } from "@angular/forms";
import { User } from "../model/users.model";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.css"]
})
export class UserEditComponent implements OnInit {
  @ViewChild("f", { static: false }) slForm: NgForm;
  id: number;
  editMode = false;
  editedItemIndex: number;
  editedItem: User = new User('', '', '','', '', 0, '', '');


  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
      if (this.editMode) {
        this.editedItem = this.userService.getUser(this.id);

      }
    });
  }


  onSubmit(form: NgForm) {
    const value = form.value;

    if (this.editMode) {
      this.userService.updateUser(this.id, value);
    } else {
      this.userService.addUser(value);
    }
    this.onCancel();
  }

  onCancel() {
    // this.router.navigate(["../", { relativeTo: this.route }]);
    this.router.navigate(["/users"]);
  }


}

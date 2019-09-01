import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";
import { UserStartComponent } from "./user-start/user-start.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { AuthGuard } from "../auth/auth.guard";
import { UsersResolverService } from "./user-resolve.service";

const routes: Routes = [
  {
    path: "",
    component: UsersComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: UserStartComponent },
      { path: "new", component: UserEditComponent },
      {
        path: ":id",
        component: UserDetailComponent,
        resolve: [UsersResolverService]
      },
      {
        path: ":id/edit",
        component: UserEditComponent,
        resolve: [UsersResolverService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}

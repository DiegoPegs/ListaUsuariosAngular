import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "/users", pathMatch: "full" },
  {
    path: "users",
    loadChildren: () => import("./users/users.module").then(m => m.UsersModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  { path: '404', component: NotFoundComponent  },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {}

}

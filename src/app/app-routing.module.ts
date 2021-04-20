import { LayoutComponent } from "./layout/layout/layout.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./shared/components/notFound/notFound.component";
import { AuthGuard } from "./shared/services/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  // {
  //   path: "auth",
  //   loadChildren: () =>
  //     import("./views/auth/auth.module").then((m) => m.AuthModule),
  // },
  {
    path: "home",
    component: LayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "employees",
        loadChildren: () =>
          import("./views/employees/employees.module").then(
            (m) => m.EmployeesModule
          ),
      },
      {
        path: "under-development",
        loadChildren: () =>
          import("./views/under-development/under-development.module").then(
            (m) => m.UnderDevelopmentModule
          ),
      },
    ],
  },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { LayoutComponent } from "./layout/layout/layout.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "dashborad", pathMatch: "full" },
      {
        path: "dashborad",
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
        path: "invoices",
        loadChildren: () =>
          import("./views/invoices/invoices.module").then(
            (m) => m.InvoicesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

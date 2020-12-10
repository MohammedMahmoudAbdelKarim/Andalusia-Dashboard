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
        path: "clients",
        loadChildren: () =>
          import("./views/clients/clients.module").then((m) => m.ClientsModule),
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

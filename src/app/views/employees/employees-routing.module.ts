import { NewEmployeeComponent } from "./new-employee/new-employee.component";
import { EmployeesListComponent } from "./employees-list/employees-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";

const routes: Routes = [
  {
    path: "",
    component: EmployeesListComponent,
  },
  {
    path: "employee-details",
    component: EmployeeDetailsComponent,
  },
  {
    path: "new-employee",
    component: NewEmployeeComponent,
  },
  {
    path: "update-employee",
    component: NewEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}

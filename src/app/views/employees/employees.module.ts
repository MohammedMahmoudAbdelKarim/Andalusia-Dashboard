import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { NewEmployeeComponent } from "./new-employee/new-employee.component";
import { EmployeesListComponent } from "./employees-list/employees-list.component";
import { EmployeesRoutingModule } from "./employees-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { LottieModule } from "ngx-lottie";

@NgModule({
  declarations: [
    EmployeesListComponent,
    NewEmployeeComponent,
    EmployeeDetailsComponent,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    LottieModule,
  ],
})
export class EmployeesModule {}

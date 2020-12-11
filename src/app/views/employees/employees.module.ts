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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LottieModule } from "ngx-lottie";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material";
import { TranslateModule } from "@ngx-translate/core";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  declarations: [
    EmployeesListComponent,
    NewEmployeeComponent,
    EmployeeDetailsComponent,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatCheckboxModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    LottieModule,
    MatDatepickerModule,
    TranslateModule.forChild(),
  ],
})
export class EmployeesModule {}

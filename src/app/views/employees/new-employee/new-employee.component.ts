import { ToastersService } from "./../../../shared/services/toasters.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DataShareService } from "src/app/shared/services/dataShare.service";
import { HandleErrorService } from "src/app/shared/services/handleError.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Locale } from "src/app/shared/interfaces/localeInterface";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-employee",
  templateUrl: "./new-employee.component.html",
})
export class NewEmployeeComponent implements OnInit {
  // Add New Employee Form
  newEmployee: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    department: new FormControl("", Validators.required),
    code: new FormControl("", Validators.required),
    birthday: new FormControl(new Date(), Validators.required),
    gender: new FormControl("", Validators.required),
  });
  // Handle Validation Messages
  showValidationError = this.handleError.showValidationError;
  getFormValidationMessage = this.handleError.getFormValidationMessage;
  editableEmployee: any = {};
  employeeIndex: any = "";
  updateMode = false;

  constructor(
    private handleError: HandleErrorService,
    private toasset: ToastersService,
    private dataShare: DataShareService,
    private router: Router
  ) {
    this.editableEmployee = this.dataShare.employee;
    this.employeeIndex = this.dataShare.employeeIndex;
    if (this.editableEmployee) {
      this.updateMode = true;
      this.newEmployee.patchValue({
        name: this.editableEmployee.name,
        department: this.editableEmployee.department,
        code: this.editableEmployee.code,
        birthday: this.editableEmployee.birthday,
        gender: this.editableEmployee.gender,
      });
    }

    this.direction$.subscribe((dir) => {
      this.dir = dir;
    });
  }
  dir: string = "";
  direction$: Observable<string> = this.dataShare.locale$.pipe(
    map((locale: Locale) => locale.dir)
  );
  employeesArray: any[] = [];

  // Get Positive Numbers
  checkPositiveNumber(value) {
    if (value.charCode > 31 && (value.charCode < 48 || value.charCode > 57))
      return false;
    return true;
  }

  // Sumbit New Employee
  submitEmployee(form) {
    let storageArray = localStorage.getItem("employees");
    if (storageArray) {
      this.employeesArray = JSON.parse(storageArray);
      if (this.employeesArray.indexOf(form) == -1) {
        this.employeesArray.push(form);
        this.toasset.Success(form.name + " " + "Added Successfully");
      }
    } else {
      this.employeesArray.push(form);
    }
    localStorage.setItem("employees", JSON.stringify(this.employeesArray));
    this.newEmployee.reset();
    this.newEmployee.controls.birthday.setValue(new Date());
    setTimeout(() => {
      this.router.navigateByUrl("/employees");
    }, 1000);
  }

  // Edit Employee
  editEmployee(form) {
    this.employeesArray = JSON.parse(localStorage.getItem("employees"));
    this.employeesArray[this.employeeIndex] = form;
    console.log(this.employeesArray);
    this.toasset.Info(form.name + " has been updated successfully");
    localStorage.setItem("employees", JSON.stringify(this.employeesArray));
    this.router.navigateByUrl("/employees");
  }

  ngOnInit() {}
}

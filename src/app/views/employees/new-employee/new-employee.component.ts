import { ToastersService } from "./../../../shared/services/toasters.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DataShareService } from "src/app/shared/services/dataShare.service";
import { HandleErrorService } from "src/app/shared/services/handleError.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Locale } from "src/app/shared/interfaces/localeInterface";

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

  constructor(
    private handleError: HandleErrorService,
    private toasset: ToastersService,
    private dataShare: DataShareService
  ) {
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
      localStorage.setItem("employees", JSON.stringify(this.employeesArray));
    }
    this.newEmployee.reset();
    this.newEmployee.controls.birthday.setValue(new Date());
  }

  ngOnInit() {}
}

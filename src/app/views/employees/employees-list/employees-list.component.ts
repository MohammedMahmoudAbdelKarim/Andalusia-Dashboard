import { DataShareService } from "./../../../shared/services/dataShare.service";
import { ToastersService } from "./../../../shared/services/toasters.service";
import { FormControl, FormGroup } from "@angular/forms";
import { SelectionModel } from "@angular/cdk/collections";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { AnimationOptions } from "ngx-lottie";
import Swal from "sweetalert2";
import { Router } from "@angular/router";
export interface EmployeeList {
  name: string;
  code: number;
  department: string;
  birthday: Date;
  symbol: string;
}

@Component({
  selector: "app-employees-list",
  templateUrl: "./employees-list.component.html",
})
export class EmployeesListComponent implements OnInit {
  filterForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    department: new FormControl([]),
  });
  // Paginator
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  employeesList: any = [];

  displayedColumns: string[] = [
    "select",
    "name",
    "code",
    "department",
    "birthday",
    "gender",
    "actions",
  ];
  dataSource = new MatTableDataSource<EmployeeList>([]);
  selection = new SelectionModel<EmployeeList>(true, []);

  constructor(
    private toaster: ToastersService,
    private dataShare: DataShareService,
    private router: Router
  ) {
    if (localStorage.getItem("employees")) {
      this.employeesList = JSON.parse(localStorage.getItem("employees"));
      this.dataSource = new MatTableDataSource<EmployeeList>(
        this.employeesList
      );
    } else this.employeesList = [];
    console.log(this.employeesList);
  }

  options: AnimationOptions = {
    path: "../../../../assets/animations/empty.json",
    loop: true,
  };

  departmentValues: any[] = [];
  employeeName: string = "";

  ngOnInit() {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // Get Department
  getDepartment(value) {
    console.log(value);
    this.departmentValues = value;
    let arr = this.employeesList.filter((ele) => {
      return value.includes(ele.department);
    });
    arr = value.length ? arr : this.employeesList;
    this.dataSource = new MatTableDataSource(arr);
    console.log(arr);
  }
  // Name Clear
  nameClear() {
    this.filterForm.controls.name.setValue("");
    this.dataSource = new MatTableDataSource(this.employeesList);
    this.dataSource.paginator = this.paginator;
  }
  // Department Clear
  clearDepartment() {
    this.filterForm.controls.department.setValue([]);
    this.dataSource = new MatTableDataSource(this.employeesList);
    this.dataSource.paginator = this.paginator;
  }
  filterEmployee(value: string) {
    console.log(value);
    this.employeeName = value;
    this.dataSource.filter = value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Edit Employee
  editEmployee(employee, i) {
    this.dataShare.getEmployee(employee, i);
    this.router.navigateByUrl("/employees/new-employee");
  }

  // Remove Employee
  removeEmployee(employee, i) {
    console.log();

    Swal.fire({
      title: "Are you sure you want to delete " + employee.name + " ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#A1A0AE",
      cancelButtonColor: "#ff9d0e",
      confirmButtonText: "Yes, " + "Delete",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.toaster.Warning("You deleted " + employee.name + " successfully");
        console.log(this.employeesList);
        this.employeesList.splice(i, 1);
        this.dataSource = new MatTableDataSource(this.employeesList);
        this.dataSource.paginator = this.paginator;
        localStorage.setItem("employees", JSON.stringify(this.employeesList));
      }
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: EmployeeList): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${
      row.code + 1
    }`;
  }
}

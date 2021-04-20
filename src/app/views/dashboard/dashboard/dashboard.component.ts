import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { DateAdapter } from "@angular/material/core";
import * as _moment from "moment";
import { ChartOptions } from "chart.js";

const moment = _moment;

const Googele_Users = [
  {
    id: 1,
    img: "assets/imgs/task/user.jpg",
    name: "Mohamed Ali",
    role: "UI Designer",
    logged_date: "02/02/2020",
    duration: "01:23",
    taken_actions: "Gmail",
  },
  {
    id: 2,
    img: "assets/imgs/task/user-2.jpg",
    name: "Alaa Hassan",
    role: "Accountant",
    logged_date: "01/02/2020",
    duration: "05:23",
    taken_actions: "Google Docs",
  },
  {
    id: 3,
    img: "assets/imgs/task/user.jpg",
    name: "Ahmed Ali",
    role: "Back-End Developer",
    logged_date: "05/28/2020",
    duration: "02:02",
    taken_actions: "Gmail",
  },
  {
    id: 4,
    img: "assets/imgs/task/notification.jpg",
    name: "Hassan Elyased",
    role: "Front-End Developer",
    logged_date: "02/08/2020",
    duration: "05:20",
    taken_actions: "Youtube",
  },
  {
    id: 5,
    img: "assets/imgs/task/user.jpg",
    name: "Karim Fathy",
    role: "Flutter Developer",
    logged_date: "03/02/2020",
    duration: "00:23",
    taken_actions: "Calender",
  },
  {
    id: 6,
    img: "assets/imgs/task/user-2.jpg",
    name: "Mai Ali",
    role: "Full-Stack Developer",
    logged_date: "09/21/2020",
    duration: "09:03",
    taken_actions: "Google Meet",
  },
  {
    id: 7,
    img: "assets/imgs/task/notification.jpg",
    name: "Ehab Hamdy",
    role: "HR",
    logged_date: "01/12/2020",
    duration: "20:50",
    taken_actions: "Google Meet",
  },
];

const Gamers = [
  {
    id: 1,
    img: "assets/imgs/task/user.jpg",
    name: "Mohamed Ali",
    role: "UI Designer",
    logged_date: "04/02/2020",
    duration: "01:23",
    taken_actions: "8 Ball Pool",
  },
  {
    id: 2,
    img: "assets/imgs/task/user-2.jpg",
    name: "Alaa Hassan",
    role: "Accountant",
    logged_date: "08/02/2020",
    duration: "05:23",
    taken_actions: "PUBG Mobile",
  },
  {
    id: 3,
    img: "assets/imgs/task/user.jpg",
    name: "Ahmed Ali",
    role: "Back-End Developer",
    logged_date: "01/28/2020",
    duration: "02:02",
    taken_actions: "Among Us",
  },
  {
    id: 4,
    img: "assets/imgs/task/notification.jpg",
    name: "Hassan Elyased",
    role: "Front-End Developer",
    logged_date: "06/08/2020",
    duration: "05:20",
    taken_actions: "Call of Duty",
  },
  {
    id: 5,
    img: "assets/imgs/task/user.jpg",
    name: "Karim Fathy",
    role: "Flutter Developer",
    logged_date: "08/02/2020",
    duration: "00:23",
    taken_actions: "Candy Crush",
  },
  {
    id: 6,
    img: "assets/imgs/task/user-2.jpg",
    name: "Mai Ali",
    role: "Full-Stack Developer",
    logged_date: "10/21/2020",
    duration: "09:03",
    taken_actions: "Tennis 3D",
  },
  {
    id: 7,
    img: "assets/imgs/task/notification.jpg",
    name: "Ehab Hamdy",
    role: "HR",
    logged_date: "12/12/2020",
    duration: "20:50",
    taken_actions: "PES 2021",
  },
];

export const MY_FORMATS = {
  parse: {
    dateInput: "LL",
  },
  display: {
    dateInput: "YYYY/MM/DD",
    monthYearLabel: "YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "YYYY",
  },
};

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "name",
    "role",
    "logged_date",
    "duration",
    "taken_actions",
    "actions",
  ];
  dataSource = new MatTableDataSource([]);

  displayedColumns_2: string[] = [
    "id",
    "name",
    "role",
    "logged_date",
    "duration",
    "taken_actions",
    "actions",
  ];
  dataSource_2 = new MatTableDataSource([]);

  @ViewChild("TableOnePaginator", { static: true })
  tableOnePaginator: MatPaginator;
  @ViewChild("TableOneSort", { static: true }) tableOneSort: MatSort;
  @ViewChild("TableTwoPaginator", { static: true })
  tableTwoPaginator: MatPaginator;
  @ViewChild("TableTwoSort", { static: true }) tableTwoSort: MatSort;

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dataSource = new MatTableDataSource(Googele_Users);
    this.dataSource_2 = new MatTableDataSource(Gamers);
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.tableOnePaginator;
    this.dataSource.sort = this.tableOneSort;
    this.dataSource_2.paginator = this.tableTwoPaginator;
    this.dataSource_2.sort = this.tableTwoSort;
  }

  applyFilterOne(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyFilterTwo(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource_2.filter = filterValue.trim().toLowerCase();

    if (this.dataSource_2.paginator) {
      this.dataSource_2.paginator.firstPage();
    }
  }
}

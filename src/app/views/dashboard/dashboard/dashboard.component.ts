import { Component, OnInit } from "@angular/core";
import { AnimationOptions } from "ngx-lottie";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  dashboardOptions: AnimationOptions = {
    path: "https://assets5.lottiefiles.com/packages/lf20_qwvl3M.json",
    loop: true,
  };
  employeesOptions: AnimationOptions = {
    path: "https://assets2.lottiefiles.com/packages/lf20_qnqidn8g.json",
    loop: true,
  };
  doctorsOptions: AnimationOptions = {
    path: "https://assets5.lottiefiles.com/private_files/lf30_4FGi6N.json",
    loop: true,
  };
  nurseOptions: AnimationOptions = {
    path: "https://assets8.lottiefiles.com/packages/lf20_jcsfwbvi.json",
    loop: true,
  };
  constructor() {}

  ngOnInit() {}
}

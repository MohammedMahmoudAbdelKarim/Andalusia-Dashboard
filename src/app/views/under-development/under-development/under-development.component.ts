import { Component, OnInit } from "@angular/core";
import { AnimationOptions } from "ngx-lottie";

@Component({
  selector: "app-under-development",
  templateUrl: "./under-development.component.html",
})
export class UnderDevelopmentComponent implements OnInit {
  constructor() {}
  options: AnimationOptions = {
    path: "https://assets9.lottiefiles.com/packages/lf20_8uHQ7s.json",
    loop: true,
  };
  ngOnInit() {}
}

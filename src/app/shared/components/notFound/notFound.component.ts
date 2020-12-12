import { Component, OnInit } from "@angular/core";
import { AnimationOptions } from "ngx-lottie";

@Component({
  selector: "app-notFound",
  templateUrl: "./notFound.component.html",
})
export class NotFoundComponent implements OnInit {
  constructor() {}
  options: AnimationOptions = {
    path: "https://assets1.lottiefiles.com/packages/lf20_0hxkpskc.json",
    loop: true,
  };
  ngOnInit() {}
}

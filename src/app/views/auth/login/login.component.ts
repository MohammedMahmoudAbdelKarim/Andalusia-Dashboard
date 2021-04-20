import { NgAuthService } from "./../../../shared/services/ng-auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  constructor(public auth: NgAuthService) {}

  pattern: string = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";

  ngOnInit() {}

  onLogin(form) {
    this.auth.SignIn(form.value.email, form.value.password);
  }
}

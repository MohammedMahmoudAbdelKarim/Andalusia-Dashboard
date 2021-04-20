import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { LottieModule } from "ngx-lottie";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { NgAuthService } from "src/app/shared/services/ng-auth.service";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LottieModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class AuthModule {}

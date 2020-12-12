import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LottieModule } from "ngx-lottie";
import { TranslateModule } from "@ngx-translate/core";
import { UnderDevelopmentRoutingModule } from "./under-development-routing.module";
import { UnderDevelopmentComponent } from "./under-development/under-development.component";

@NgModule({
  declarations: [UnderDevelopmentComponent],
  imports: [
    CommonModule,
    UnderDevelopmentRoutingModule,
    LottieModule,
    TranslateModule.forChild(),
  ],
})
export class UnderDevelopmentModule {}

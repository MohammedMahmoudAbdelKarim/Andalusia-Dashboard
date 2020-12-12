import { RouterModule } from "@angular/router";
import { NotFoundComponent } from "./components/notFound/notFound.component";
import { SplashComponent } from "./components/splash/splash.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import { TranslateModule } from "@ngx-translate/core";
import { LottieModule } from "ngx-lottie";
import { ModalModule } from "ngx-bootstrap/modal";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SplashComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    RouterModule,
    MatMenuModule,
    TranslateModule.forChild(),
    LottieModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SplashComponent,
    NotFoundComponent,
  ],
})
export class SharedModule {}

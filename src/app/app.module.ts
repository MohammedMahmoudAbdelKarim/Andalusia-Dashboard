import { NgAuthService } from "src/app/shared/services/ng-auth.service";
import { AuthModule } from "./views/auth/auth.module";
import { FormsModule } from "@angular/forms";
import { LayoutComponent } from "./layout/layout/layout.component";
import { CookieService } from "ngx-cookie-service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { LottieModule } from "ngx-lottie";
import player from "lottie-web";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { MatMenuModule } from "@angular/material/menu";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { NgbDropdownModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "src/environments/environment";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./../assets/i18n/", ".json");
}

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatInputModule,
    NgbDropdownModule,
    NgbModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatMenuModule,
    MatDividerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatSidenavModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    SharedModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: "toast-top-center",
      progressBar: true,
      closeButton: true,
      enableHtml: true,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [CookieService, NgAuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}

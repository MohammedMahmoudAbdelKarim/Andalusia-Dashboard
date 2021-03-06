import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Locale } from "./shared/interfaces/localeInterface";
import { CommonFunctionsService } from "./shared/services/commonFunctions.service";
import { TranslateService } from "@ngx-translate/core";
import { DataShareService } from "./shared/services/dataShare.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  direction: string;
  lang: string;
  constructor(
    public dataShare: DataShareService,
    public translate: TranslateService,
    private cf: CommonFunctionsService
  ) {}
  showSplash$: Observable<boolean> = this.dataShare.showSplash$;

  ngOnInit() {
    this.onRouterChange();
    this.dataShare.InitData();
    this.initUserLanguage();
  }

  onRouterChange() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  initUserLanguage() {
    this.translate.addLangs(["en", "ar"]);
    this.dataShare.locale$.subscribe((locale: Locale) => {
      this.translate.setDefaultLang(locale.lang);
      this.direction = locale.dir;
      this.lang = locale.lang;
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    localStorage.removeItem("locale");
  }
}

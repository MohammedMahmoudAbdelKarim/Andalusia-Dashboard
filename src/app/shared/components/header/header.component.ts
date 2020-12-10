import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Locale } from "../../interfaces/localeInterface";
import { DataShareService } from "../../services/dataShare.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
  constructor(
    private dataShare: DataShareService,
    public translate: TranslateService
  ) {}
  // Get Direction
  direction$: Observable<string> = this.dataShare.locale$.pipe(
    map((locale: Locale) => locale.dir)
  );

  language = "en";
  lang: string = "";
  date: Date = new Date();

  changeLang() {
    this.language = this.language === "ar" ? "en" : "ar";
    this.dataShare.changeAppLanguage(this.language);
  }

  ngOnInit() {
    this.initUserLanguage();
  }

  initUserLanguage() {
    this.translate.addLangs(["en", "ar"]);
    this.dataShare.locale$.subscribe((locale: Locale) => {
      this.translate.setDefaultLang(locale.lang);
      this.lang = locale.lang;
    });
  }
}
